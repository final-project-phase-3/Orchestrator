const {readImage} = require('../querys/food')

const resolvers = {
  Query: {
    async processImage(parent,{ imageBase64 },{ token },info){
      const response = await readImage({ token,imageBase64 })
      
      return response
    },
  }
};


module.exports = resolvers