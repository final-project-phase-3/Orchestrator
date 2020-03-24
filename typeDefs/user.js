const { gql } = require("apollo-server");
const typeDefs = gql`
  type responseUser {
    username: String
    email: String
    password: String
    refrigerator: [refrigerator]
  }

  type refrigerator {
    _id: String
    name: String
    image_url: String
  }
  extend type Query {
    getUser: responseUser
  }
  extend type Mutation {
    register(username: String!, email: String!, password: String!): responseUser
  }
`;

module.exports = typeDefs;
