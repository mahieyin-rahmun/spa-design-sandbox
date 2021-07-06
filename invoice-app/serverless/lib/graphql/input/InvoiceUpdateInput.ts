import { Field, InputType } from "type-graphql";
import { EInvoiceStatus, EPaymentTerms } from "../../../../types/server";
import { AddressInput, AddressUpdateInput, ProjectItemUpdateInput } from "./";

@InputType()
export class InvoiceUpdateInput {
  @Field(() => AddressUpdateInput, { nullable: true })
  from?: AddressUpdateInput;

  @Field(() => AddressUpdateInput, { nullable: true })
  to?: AddressUpdateInput;

  @Field({ nullable: true })
  clientEmail?: string;

  @Field({ nullable: true })
  clientName?: string;

  @Field({ nullable: true })
  invoiceDate?: string;

  @Field({ nullable: true })
  projectDescription?: string;

  @Field(() => EPaymentTerms, { nullable: true })
  paymentTerms?: EPaymentTerms;

  @Field(() => [ProjectItemUpdateInput], { nullable: true })
  items?: ProjectItemUpdateInput[];

  @Field(() => EInvoiceStatus, { nullable: true })
  status?: EInvoiceStatus;
}
