const {readImage} = require('../querys/food')

const resolvers = {
  Query: {
    async processImage(parent,{ imageUrl },context,info){
      const response = await readImage({ imageUrl })
      console.log(response)
      return response
    },
  }
};


module.exports = resolvers