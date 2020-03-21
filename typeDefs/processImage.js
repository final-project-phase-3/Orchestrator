const { gql } = require('apollo-server');
const typeDefs = gql`
  type responseProcess{
    name: String,
    imageUrl: String,
    msg: String
  }

  extend type Mutation {
    processImage(imageUrl:String):responseProcess
  }

`

module.exports = typeDefs
