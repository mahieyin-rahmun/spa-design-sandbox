import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import type { PageConfig } from "next";
import { buildSchema } from "type-graphql";
import { prepareConnection } from "../../../serverless/lib/utils/db";
import HelloResolver from "../../../serverless/lib/graphql/resolvers/HelloResolver";
import InvoiceResolver from "../../../serverless/lib/graphql/resolvers/InvoiceResolver";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [HelloResolver, InvoiceResolver],
  }),
  context: async ({ req }) => {
    let databaseConnection = await prepareConnection();
    return {
      req,
      databaseConnection,
    };
  },
});

export default apolloServer.createHandler({ path: "/api/graphql" });
