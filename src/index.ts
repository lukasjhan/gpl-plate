import { ApolloServer } from "apollo-server";
import { buildSchemaSync } from "type-graphql";
import "reflect-metadata";
import { DataResolver, ResolverProvider } from "./resolvers";

const schema = buildSchemaSync({
  resolvers: [ResolverProvider, DataResolver],
});

console.log("server start with", schema);

const server = new ApolloServer({ schema });
server.listen().then(({ url }) => {
  console.log("🚀  Server ready at", url);
});
