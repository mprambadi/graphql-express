import DataLoader from "dataloader";
import { User, Post, Address } from "../../database/models";

import { groupBy } from "lodash";

const orderedFor = (data, collection, field, singleObject) => {
  const inGroupsField = groupBy(data, field);
  return collection.map((element) => {
    const elementArray = inGroupsField[element];
    if (elementArray) {
      return singleObject ? elementArray[0] : elementArray;
    }
    return singleObject ? null : [];
  });
};

export default {
  Query: {
    Users: async (_, __, { db }) => {
      const users = await db.User.findAll({
        order: [["id", "asc"]],
      });

      return users;
    },
    User: async (_, { id }, { db }) => {
      const users = await db.User.findOne({
        where: { id },
        order: [["createdAt", "desc"]],
      });

      return users;
    },
    Posts: async (_, __, { db }) => {
      const posts = await db.Post.findAll({
        order: [["createdAt", "desc"]],
      });

      return posts;
    },
    Post: async (_, { id }, { db }) => {
      const posts = await db.Post.findOne({
        where: { id },
        order: [["createdAt", "desc"]],
      });

      return posts;
    },
  },

  User: {
    async posts(parent, _, { db }) {
      return PostDataLoader.load(parent.id);
    },

    async addresses(parent, _, { db }) {
      return AddressDataLoader.load(parent.id);
    },
  },

  Post: {
    user(parent, _, { db }) {
      return UserDataLoader.load(parent.userId);
    },
  },
};

const UserDataLoader = new DataLoader(async (userIds) => {
  return User.findAll({ where: { id: userIds } });
});

const PostDataLoader = new DataLoader(async (userId) => {
  const data = await Post.findAll({ where: { userId: userId }, raw: true });
  return orderedFor(data, userId, "userId", false);
});

const AddressDataLoader = new DataLoader(async (userId) => {
  const data = await Address.findAll({ where: { userId: userId }, raw: true });
  return orderedFor(data, userId, "userId", false);
});
