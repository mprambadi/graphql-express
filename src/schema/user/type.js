import { makeExecutableSchema, gql } from "apollo-server-express";

export default makeExecutableSchema({
  typeDefs: gql`
    type Post {
      id: Int!
      title: String!
      content: String!
      user: User
    }

    type Address {
      id: Int!
      address: String
    }

    type User {
      id: Int!
      username: String!
      email: String!
      posts: [Post]
      addresses: [Address] 
    }

    type Query {
      Users: [User]
      User(id: Int): User
      Posts: [Post]
      Post(id: Int): Post
    }
  `,
});
