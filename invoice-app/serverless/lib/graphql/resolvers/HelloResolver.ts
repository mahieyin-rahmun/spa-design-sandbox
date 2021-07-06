import { Query, Resolver } from "type-graphql";

@Resolver()
export default class HelloResolver {
  @Query(() => String)
  sayHello() {
    return "Hello from Graphql Server";
  }
}
