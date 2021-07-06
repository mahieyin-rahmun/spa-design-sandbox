import { Field, Float, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EInvoiceStatus, IInvoice, EPaymentTerms } from "../../../types/server";
import { Address, ProjectItem } from "./entities";

registerEnumType(EInvoiceStatus, {
  name: "EInvoiceStatus",
  description: "The current status of the Invoice",
});

registerEnumType(EPaymentTerms, {
  name: "EPaymentTerms",
  description: "The payment terms of the invoice",
});

@Entity()
@ObjectType()
export class Invoice extends BaseEntity implements IInvoice {
  @PrimaryGeneratedColumn("rowid")
  @Field(() => ID)
  id!: number;

  @Column()
  @Field(() => Float)
  amount!: number; // computed from the total price of all items

  @Column()
  @Field()
  clientEmail!: string;

  @Column()
  @Field()
  clientName!: string;

  @Column()
  @Field()
  projectDescription!: string;

  @Column()
  @Field()
  dueDate!: string; // computed from Invoice Date and Payment Term

  @Column()
  @Field()
  invoiceDate!: string;

  @Column({ type: "enum", enum: EInvoiceStatus })
  @Field(() => EInvoiceStatus)
  status!: EInvoiceStatus; // by default it is PENDING for any new invoice

  @Column({ type: "enum", enum: EPaymentTerms })
  @Field(() => EPaymentTerms)
  paymentTerm!: EPaymentTerms;

  @ManyToOne(() => Address, { nullable: false, eager: true })
  @Field(() => Address)
  from!: Address;

  @ManyToOne(() => Address, { nullable: false, eager: true })
  @Field(() => Address)
  to!: Address;

  @OneToMany(() => ProjectItem, (projectItem) => projectItem.invoice, {
    eager: true,
    cascade: true,
  })
  @Field(() => [ProjectItem])
  items!: ProjectItem[];
}
