import { Field, InputType } from "type-graphql";
import { TInvoiceFormInputTypes } from "../../../../types/client";
import { EPaymentTerms } from "../../../../types/server";
import { AddressInput, ProjectItemInput } from "./";

@InputType()
export class InvoiceInput implements TInvoiceFormInputTypes.TInvoiceFormModel {
  @Field(() => AddressInput)
  from!: AddressInput;

  @Field(() => AddressInput)
  to!: AddressInput;

  @Field()
  clientEmail!: string;

  @Field()
  clientName!: string;

  @Field()
  invoiceDate!: string;

  @Field()
  projectDescription!: string;

  @Field(() => EPaymentTerms)
  paymentTerms!: EPaymentTerms;

  @Field(() => [ProjectItemInput])
  items!: ProjectItemInput[];
}
