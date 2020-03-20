const {getRecipes} = require('../querys/food')

const resolvers = {
  Query: {
    async getRecipes(_,{ ingredients },context,info){
      const response = await getRecipes(ingredients)
      console.log(response)
      return response
    },
  }
};


module.exports = resolvers