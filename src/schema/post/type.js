import { makeExecutableSchema, gql } from "apollo-server-express";

export default makeExecutableSchema({
  typeDefs: gql`
    type User {
      id: Int!
      username: String!
      email: String!
    }

    type Query {
     getUsers: [User]
    }
  `
});
