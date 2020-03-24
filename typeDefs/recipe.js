const { gql } = require('apollo-server');
const typeDefs = gql`
  type missedIngredient{
    original: String
  }
  type usedIngredient{
    original: String
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
    id: Int
    title: String
    image: String
    missedIngredients: [missedIngredient]
    usedIngredients: [usedIngredient]
    cookingSteps: [cookingStep]
    nutritions: [nutrition]
    readyInMinutes: Int
  }
  type ingredientFromSearch{
    original: String
  }
  type searchrecipe{
    id: Int
    title: String
    image: String
    ingredients: [ingredientFromSearch]
    cookingSteps: [cookingStep]
    nutritions: [nutrition]
    readyInMinutes: Int
  }
  extend type Query {
    getRecipes(ingredients: [String]): [recipe]
    searchRecipes(input: String): [searchrecipe]
    getRandomRecipes: [searchrecipe]
  }

`

module.exports = typeDefs