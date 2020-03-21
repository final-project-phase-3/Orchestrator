const {getUser} = require('../querys/food')

const resolvers = {
  Query: {
    async getUser(_,input,{token},info){
      const response = await getUser(token)
      console.log(response)
      return response
    },
  }
};


module.exports = resolvers