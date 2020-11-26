import PostResolver from "@schema/post/resolver";
import UserResolver from "@schema/user/resolver";
import User from "@schema/user/type";

import merge from "lodash.merge";
import { mergeSchemas } from "apollo-server-express";

export const AppSchema = mergeSchemas({
  schemas: [User],
  resolvers: merge(PostResolver, UserResolver)
});
