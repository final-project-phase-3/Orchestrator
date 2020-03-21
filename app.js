const { ApolloServer } = require('apollo-server');
const typeDefsProcessImage  = require('./typeDefs/processImage')
const typeDefsRecipe  = require('./typeDefs/recipe')
const resolvers = require('./resolvers/processImage')
const foodResolvers = require('./resolvers/recipe')
const server = new ApolloServer(
  { 
    typeDefs:
      [
        typeDefsProcessImage,
        typeDefsRecipe
      ], 
    resolvers : [resolvers,foodResolvers],
    context: ({ req }) => {
      const token = req.headers.token || ""
      return { token };
    }
  }
)
const PORT = 4000
// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});