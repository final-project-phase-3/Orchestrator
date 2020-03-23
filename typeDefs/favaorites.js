const { gql } = require("apollo-server");
const typeDefsFavorite = gql`
  scalar Object
  type favorite {
    _id: String
    title: String
    image: String
    missedIngredients: [Object]
    cookingSteps: [Object]
    nutritions: [Object]
    readyInMinutes: Int
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
      nutritions: [Object]
      readyInMinutes: Int
      title: String!
      image: String
      usedIngredients: [Object]
      missedIngredients: [Object]
    ): favorite
    removeFromFav(idAPI: String!): favorite
  }
`;

module.exports = { typeDefsFavorite };
