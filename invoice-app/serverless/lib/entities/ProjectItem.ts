import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IProjectItem } from "../../../types/server";
import { Invoice } from "./entities";

@Entity()
@ObjectType()
export class ProjectItem extends BaseEntity implements IProjectItem {
  @PrimaryGeneratedColumn("rowid")
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field(() => Int)
  quantity!: number;

  @Column()
  @Field(() => Float)
  unitPrice!: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.items, {
    nullable: false,
  })
  @Field(() => Invoice)
  invoice!: Invoice;
}
