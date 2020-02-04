import express from "express";
import { ApolloServer } from "apollo-server-express";
import db from "@model";
import { AppSchema } from "@schema";

const server = new ApolloServer({ schema: AppSchema, context: { db } });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
