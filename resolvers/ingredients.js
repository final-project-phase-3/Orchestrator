const { addToFridge, deleteFromFridge } = require("../querys/ingredients");

const resolvers = {
  Mutation: {
    async addToFridge(_, args, context) {
      const data = {
        context,
        ingredient: {
          name: args.name,
          image_url: args.image_url,
          tags: args.tags
        }
      };
      const response = await addToFridge(data);
      return response;
    },
    async deleteFromFridge(_, args, context) {
      const data = {
        context,
        _id: args._id
      };
      const response = await deleteFromFridge(data);
      return response;
    }
  }
};

module.exports = { resolvers };
