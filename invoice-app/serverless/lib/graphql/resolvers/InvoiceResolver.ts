import 'reflect-metadata';
import { UserInputError } from 'apollo-server-errors';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { EInvoiceStatus, IGraphqlContext } from '../../../../types/server';
import { Address, Invoice, ProjectItem } from '../../entities/entities';
import {
  calculateAmountFromProjectItems,
  calculateDueDateFromProjectTerms,
  isValidDate,
} from '../../utils/invoice';
import { InvoiceInput } from '../input';
import { InvoiceUpdateInput } from '../input/';

@Resolver()
export default class InvoiceResolver {
  @Mutation(() => Invoice)
  async createInvoice(
    @Arg('invoiceInput') { from, to, items, ...rest }: InvoiceInput,
    @Ctx() context: any,
  ): Promise<Invoice> {
    // TODO: reimplement using transactions
    const amount = calculateAmountFromProjectItems(items);

    if (!/\d{4}-\d{2}-\d{2}/.test(rest.invoiceDate)) {
      throw new UserInputError(
        'Invalid date. Date must be in YYYY-MM-DD format',
      );
    }

    const validInvoiceDate = isValidDate(rest.invoiceDate);

    if (!validInvoiceDate) {
      throw new UserInputError(
        'Invalid date. Date must be in YYYY-MM-DD format',
      );
    }

    const dueDate = calculateDueDateFromProjectTerms(
      rest.invoiceDate,
      rest.paymentTerms,
    );
    const status = EInvoiceStatus.PENDING;

    const fromAddress = Address.create({
      ...from,
    });
    await fromAddress.save();

    const toAddress = Address.create({
      ...to,
    });
    await toAddress.save();

    const newInvoice = Invoice.create({
      ...rest,
      amount,
      dueDate,
      status,
      paymentTerm: rest.paymentTerms, // TODO: fix the name
    });

    newInvoice.from = fromAddress;
    newInvoice.to = toAddress;
    await newInvoice.save();

    const projectItems: ProjectItem[] = [];

    for (let item of items) {
      const newItem = ProjectItem.create({
        ...item,
      });
      newItem.invoice = newInvoice;
      projectItems.push(await newItem.save());
    }

    newInvoice.items = projectItems;
    return newInvoice;
  }

  @Query(() => Invoice)
  async getInvoice(@Arg('invoiceId') id: number): Promise<Invoice> {
    if (!id) {
      throw new UserInputError('Invalid invoice ID');
    }

    const invoice = await Invoice.findOneOrFail(id, {
      relations: ['from', 'to', 'items'],
    });

    return invoice;
  }

  @Mutation(() => Boolean)
  async deleteInvoice(@Arg('invoiceId') id: number): Promise<boolean> {
    const deleted = await Invoice.delete(id);
    return deleted.affected === 1;
  }

  @Mutation(() => Invoice)
  async updateInvoice(
    @Arg('invoiceId') invoiceId: number,
    @Arg('invoiceData')
    { from, to, items, invoiceDate, paymentTerms, ...rest }: InvoiceUpdateInput,
    @Ctx() { databaseConnection }: IGraphqlContext,
  ): Promise<Invoice> {
    const oldInvoice = await this.getInvoice(invoiceId);

    if (!oldInvoice) {
      throw new UserInputError(
        'The invoice for the given invoice ID does not exist',
      );
    }

    await databaseConnection.transaction(async (transactionalEntityManager) => {
      try {
        // dueDate needs be recomputed if the invoice date or the payment terms or both change
        // if invoice date was passed, check if it is valid
        if (invoiceDate && !isValidDate(invoiceDate)) {
          throw new UserInputError(
            'Invalid date. Date must be in the format YYYY-MM-DD',
          );
        }

        // recompute due date if invoice date or payment terms or both have changed
        let newDueDate;
        if (invoiceDate && !paymentTerms) {
          newDueDate = calculateDueDateFromProjectTerms(
            invoiceDate,
            oldInvoice.paymentTerm,
          );
        } else if (invoiceDate && paymentTerms) {
          newDueDate = calculateDueDateFromProjectTerms(
            invoiceDate,
            paymentTerms,
          );
        } else if (!invoiceDate && paymentTerms) {
          newDueDate = calculateDueDateFromProjectTerms(
            oldInvoice.invoiceDate,
            paymentTerms,
          );
        }

        // process the project items
        // if it has id, it is an update op
        // it it does not have id, it is a create op
        if (items && items.length > 0) {
          for (let item of items) {
            if (item.id) {
              await transactionalEntityManager.update(
                ProjectItem,
                { id: item.id, invoice: oldInvoice },
                { ...item },
              );
            } else {
              await transactionalEntityManager
                .create(ProjectItem, {
                  ...item,
                  invoice: oldInvoice,
                })
                .save();
            }
          }
        }

        // update addresses
        if (from) {
          await transactionalEntityManager.save(Address, {
            id: oldInvoice.from.id,
            ...from,
          });
        }

        if (to) {
          await transactionalEntityManager.save(Address, {
            id: oldInvoice.to.id,
            ...to,
          });
        }

        const newItems = await transactionalEntityManager.find(ProjectItem, {
          where: { invoice: oldInvoice },
        });
        const newAmount = calculateAmountFromProjectItems(newItems);

        // update the invoice item, this does not return the relations
        await transactionalEntityManager.save(Invoice, {
          id: invoiceId,
          invoiceDate,
          paymentTerm: paymentTerms,
          amount: newAmount,
          dueDate: newDueDate,
          ...rest,
        });
      } catch (error) {
        throw error;
      }
    });

    // do a select
    return await this.getInvoice(invoiceId);
  }
}
