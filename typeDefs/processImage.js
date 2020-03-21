const { gql } = require('apollo-server');
const typeDefs = gql`
  type responseProcess{
    name: String,
    imageUrl: String,
    msg: String
  }

  type Query {
    processImage(imageBase64:String):responseProcess
  }

`

module.exports = typeDefs
