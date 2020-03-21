const { getFav, addTofav, removeFromFav } = require("../querys/favorites");

const resolvers = {
  Query: {
    async getFav(_, args, context) {
      //   if (context.token) {
      //     console.log(context.token);
      //   }
      const response = await getFav({ context });
      return response;
    }
  },
  Mutation: {
    async addToFav(_, args, context) {
      const objData = {
        idAPI: args.idAPI,
        name: args.name,
        cookingSteps: args.cookingSteps,
        nutrition: args.nutrition,
        servingTime: args.servingTime,
        image_url_recipe: args.image_url_recipe
      };
      const response = await addTofav({
        token: context.token,
        data: objData
      });
      return response;
    },
    async removeFromFav(_, args, context) {
      const response = await removeFromFav({
        token: context.token,
        data: args.idAPI
      });
      return response;
    }
  }
};

module.exports = { resolvers };
