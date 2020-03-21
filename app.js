const { ApolloServer } = require("apollo-server");
const typeDefsProcessImage = require("./typeDefs/processImage");
const typeDefsRecipe = require("./typeDefs/recipe");
const { typeDefsFavorite } = require("./typeDefs/favaorites");
const resolvers = require("./resolvers/processImage");
const foodResolvers = require("./resolvers/recipe");
const { resolvers: favoriteResolver } = require("./resolvers/favorites");
const server = new ApolloServer({
  typeDefs: [typeDefsProcessImage, typeDefsRecipe, typeDefsFavorite],
  resolvers: [resolvers, foodResolvers, favoriteResolver],
  context: ({ req }) => {
    const token =
      req.headers.token ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzQ0NWNhM2MzOTAxMjU3ZDBlNDg2MSIsImlhdCI6MTU4NDY3ODM0Nn0.vDZ90GAsiI3xGrV2Yed2Rb3TTzX5Nowz8A7-eCIPGj4";
    return { token };
  }
});
const PORT = 4000;
// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
