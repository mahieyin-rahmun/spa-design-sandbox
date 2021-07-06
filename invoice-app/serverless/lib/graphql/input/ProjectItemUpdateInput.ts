import { Field, Float, ID, InputType, Int } from "type-graphql";
import { ProjectItemInput } from "./";

@InputType()
export class ProjectItemUpdateInput implements Partial<ProjectItemInput> {
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  quantity?: number;

  @Field(() => Float, { nullable: true })
  unitPrice?: number;
}
