import { makeExecutableSchema, gql } from "apollo-server-express";

export default makeExecutableSchema({
  typeDefs: gql`
    type Post {
      id: Int!
      title: String!
      content: String!
    }

    type Query {
     getPosts: [Post]
    }
  `
});
