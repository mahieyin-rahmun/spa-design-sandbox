import { Field, InputType } from "type-graphql";
import { IAddress } from "../../../../types/server";

@InputType()
export class AddressUpdateInput
  implements
    Partial<
      Pick<IAddress, "streetAddress" | "city" | "postalCode" | "country">
    >
{
  @Field({ nullable: true })
  streetAddress?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  postalCode?: string;
}
