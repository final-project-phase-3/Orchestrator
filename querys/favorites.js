const axios = require("axios");
var Redis = require("ioredis");
const redis = new Redis();
const url = "http://localhost:3001/";
const { ApolloError } = require("apollo-server");

async function getFav(data) {
  //   console.log(data.context.token);
  try {
    const result = await axios({
      method: "GET",
      url: `${url}favorites`,
      headers: {
        token: data.context.token
      }
    });
    return result.data;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function addTofav({ token, data }) {
  try {
    const result = await axios({
      method: "POST",
      url: `${url}favorites/${data.idAPI}`,
      headers: {
        token
      },
      data: {
        title: data.title,
        cookingSteps: data.cookingSteps,
        nutritions: data.nutritions,
        readyInMinutes: data.readyInMinutes,
        image: data.image,
        usedIngredients: data.usedIngredients,
        missedIngredients: data.missedIngredients
      }
    });

    return result.data;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function removeFromFav({ token, data }) {
  console.log(data);
  try {
    const result = await axios({
      method: "DELETE",
      url: `${url}favorites/${data}`,
      headers: {
        token
      }
    });
    return result.data;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

module.exports = { getFav, addTofav, removeFromFav };
