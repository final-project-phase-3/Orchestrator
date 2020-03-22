const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    refrigerator: [Ingredient]
  }

  type Ingredient {
    _id: String
    name: String
    image_url: String
  }
  extend type Mutation {
    addToFridge(image_url: String!, name: String!, tags: [String]): User
    deleteFromFridge(_id: String!): User
  }
`;

module.exports = { typeDefs };
