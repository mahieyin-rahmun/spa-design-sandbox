import { Field, Float, InputType, Int } from "type-graphql";
import { IProjectItem } from "../../../../types/server";

@InputType()
export class ProjectItemInput
  implements Pick<IProjectItem, "name" | "quantity" | "unitPrice">
{
  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;

  @Field(() => Float)
  unitPrice!: number;
}
