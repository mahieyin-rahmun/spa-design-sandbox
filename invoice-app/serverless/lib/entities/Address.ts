import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IAddress } from "../../../types/server";

@Entity()
@ObjectType()
export class Address extends BaseEntity implements IAddress {
  @PrimaryGeneratedColumn("rowid")
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  streetAddress!: string;

  @Column()
  @Field()
  city!: string;

  @Column()
  @Field()
  country!: string;

  @Column()
  @Field()
  postalCode!: string;
}
