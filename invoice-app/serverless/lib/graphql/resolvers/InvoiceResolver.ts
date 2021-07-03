import { UserInputError } from "apollo-server-errors";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { EInvoiceStatus, EPaymentTerms } from "../../../../types/server";
import { Address, Invoice, ProjectItem } from "../../entities/entities";
import { InvoiceInput } from "../input";

@Resolver()
export default class InvoiceResolver {
  @Mutation(() => Invoice)
  async createInvoice(
    @Arg("invoiceInput") { from, to, items, ...rest }: InvoiceInput,
    @Ctx() context: any,
  ): Promise<Invoice> {
    // TODO: reimplement using transactions
    const amount = items.reduce(
      (accumulator, current) =>
        accumulator + current.quantity * current.unitPrice,
      0,
    );

    if (!/\d{4}-\d{2}-\d{2}/.test(rest.invoiceDate)) {
      throw new UserInputError(
        "Invalid date. Date must be in YYYY-MM-DD format",
      );
    }

    // this is highly inaccurate and some library like luxon should be used for date time manipulation
    const currentDateMillis = new Date(rest.invoiceDate).getTime();
    const offsetDays =
      rest.paymentTerms === EPaymentTerms.NET_30_DAYS
        ? 30
        : rest.paymentTerms === EPaymentTerms.NET_6_MONTHS
        ? 6 * 30
        : 12 * 30;
    const offsetMillis = offsetDays * 24 * 3600 * 1000;
    const dueDate = new Date(currentDateMillis + offsetMillis)
      .toISOString()
      .split("T")[0];

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

    const invoiceItems: ProjectItem[] = [];

    for (let item of items) {
      const newItem = ProjectItem.create({
        ...item,
      });
      newItem.invoice = newInvoice;
      invoiceItems.push(newItem);
      await newItem.save();
    }

    return newInvoice;
  }

  @Query(() => Invoice)
  async getInvoice(@Arg("invoiceId") id: string): Promise<Invoice> {
    if (!id) {
      throw new UserInputError("Invalid invoice ID");
    }

    const invoice = await Invoice.findOneOrFail(id, {
      relations: ["from", "to", "items"],
    });

    console.log(invoice);

    return invoice;
  }
}
