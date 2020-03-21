const { gql } = require("apollo-server");
const typeDefsFavorite = gql`
  scalar Object
  type favorite {
    _id: String
    name: String
    image_url_recipe: String
    missedIngredients: [Object]
    cookingSteps: [Object]
    nutrition: [Object]
    servingTime: String
    idAPI: String
  }

  extend type Query {
    getFav: [favorite]
  }

  type Mutation {
    addToFav(
      idAPI: String!
      cookingSteps: [Object]
      nutrition: [Object]
      servingTime: String
      name: String!
      image_url_recipe: String
    ): favorite
    removeFromFav(idAPI: String!): favorite
  }
`;

module.exports = { typeDefsFavorite };
