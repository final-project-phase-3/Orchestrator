const { gql } = require("apollo-server");
const typeDefs = gql`
  type responseUser {
    username: String
    email: String
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
`;

module.exports = typeDefs;
