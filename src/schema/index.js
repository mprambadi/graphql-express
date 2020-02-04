import PostResolver from "@schema/post/resolver";
import UserResolver from "@schema/user/resolver";
import Post from "@schema/post/type";
import User from "@schema/user/type";

import merge from "lodash.merge";
import { mergeSchemas } from "apollo-server-express";

export const AppSchema = mergeSchemas({
  schemas: [Post, User],
  resolvers: merge(PostResolver, UserResolver)
});
