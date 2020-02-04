export default {
  Query: {
    getPosts: async (_, __, { db }) => {
      const posts = await db.Post.findAll({
        order: [["createdAt", "desc"]]
      });

      return posts;
    }
  }
};
