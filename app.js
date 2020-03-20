const { ApolloServer } = require('apollo-server');
const typeDefsProcessImage  = require('./typeDefs/processImage')
const resolvers = require('./resolvers/processImage')
const server = new ApolloServer(
  { 
    typeDefs:
      [
        typeDefsProcessImage
      ], 
    resolvers : [resolvers]
  }
)
const PORT = 4000
// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});