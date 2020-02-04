export default {
  Query: {
    getUsers: async (_, __, { db }) => {
      const posts = await db.User.findAll({
        order: [["createdAt", "desc"]]
      });

      return posts;
    }
  },
};
