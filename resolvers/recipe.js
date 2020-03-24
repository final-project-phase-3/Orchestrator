const {getRecipes, searchRecipes, getRandomRecipes} = require('../querys/food')

const resolvers = {
  Query: {
    async getRecipes(_,{ ingredients },context,info){
      const response = await getRecipes(ingredients)
      console.log(response)
      return response
    },
    async searchRecipes(_,{ input },context,info){
      console.log(input,"<<")
      const response = await searchRecipes(input)
      console.log(response)
      return response
    },
    async getRandomRecipes(_, args,context,info){
      const response = await getRandomRecipes()
      console.log(response)
      return response
    },
  }
};


module.exports = resolvers