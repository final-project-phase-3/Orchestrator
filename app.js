const { ApolloServer } = require('apollo-server');
const typeDefsProcessImage  = require('./typeDefs/processImage')
const typeDefsRecipe  = require('./typeDefs/recipe')
const { typeDefsFavorite } = require("./typeDefs/favaorites");
const typeDefsUser  = require('./typeDefs/user')
const resolvers = require('./resolvers/processImage')
const foodResolvers = require('./resolvers/recipe')
const userResolvers = require('./resolvers/user')
const { resolvers: favoriteResolver } = require('./resolvers/favorites')

const server = new ApolloServer(
  { 
    typeDefs: [typeDefsProcessImage, typeDefsRecipe, typeDefsFavorite,typeDefsUser],
    resolvers: [resolvers, foodResolvers, favoriteResolver,userResolvers],
    context: ({ req }) => {
      const token = req.headers.token || ""
      return { token };
    }
  }
)

const PORT = 4000;
// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
