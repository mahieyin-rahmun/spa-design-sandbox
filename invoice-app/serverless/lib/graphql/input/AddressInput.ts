import { Field, InputType } from "type-graphql";
import { IAddress } from "../../../../types/server";

@InputType()
export class AddressInput
  implements
    Pick<IAddress, "streetAddress" | "city" | "postalCode" | "country">
{
  @Field()
  streetAddress!: string;

  @Field()
  city!: string;

  @Field()
  country!: string;

  @Field()
  postalCode!: string;
}
