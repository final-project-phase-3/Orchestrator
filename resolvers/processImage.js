const {readImage} = require('../querys/food')

const resolvers = {
  Mutation: {
    async processImage(parent,{ imageUrl },{ token },info){
      
      const response = await readImage({ token,imageUrl })
      
      return response
    },
  }
};


module.exports = resolvers