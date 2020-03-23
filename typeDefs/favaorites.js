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
    usedIngredients: [Object]
    idAPI: String
  }

  type Query {
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
      usedIngredients: [Object]
      missedIngredients: [Object]
    ): favorite
    removeFromFav(idAPI: String!): favorite
  }
`;

module.exports = { typeDefsFavorite };
