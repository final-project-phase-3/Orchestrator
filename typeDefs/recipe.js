const { gql } = require('apollo-server');
const typeDefs = gql`
  type missedIngredient{
    name: String
  }
  type cookingStep{
    step: String
    equipment: [tool]
    ingredients: [ingredient]
  }
  type tool{
    name: String
  }
  type ingredient{
    name: String
  }
  type nutrition{
    title: String
    amount: Float
    unit: String
  }
  type recipe{
    id: String
    title: String
    image: String
    missedIngredients: [missedIngredient]
    cookingSteps: [cookingStep]
    nutritions: [nutrition]
    servingTime: Int
  }
  extend type Query {
    getRecipes(ingredients: [String]): [recipe]
  }

`

module.exports = typeDefs