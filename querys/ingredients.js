const axios = require("axios");
var Redis = require("ioredis");
const redis = new Redis();
const url = "http://localhost:3001/";
const { ApolloError } = require("apollo-server");

async function addToFridge(data) {
  try {
    const result = await axios({
      method: "POST",
      url: `${url}refrigerator`,
      headers: {
        token: data.context.token
      },
      data: {
        ingredient: {
          name: data.ingredient.name,
          image_url: data.ingredient.image_url,
          tags: data.ingredient.tags
        }
      }
    });
    // return result.data;
    console.log(result.data, "<<");
    return {
      username: result.data.username,
      email: result.data.email,
      _id: result.data._id,
      refrigerator: result.data.refrigerator,
      msg: "New Ingredient"
    };
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function deleteFromFridge(data) {
  console.log(data, "< qu");
  try {
    const result = await axios({
      method: "DELETE",
      url: `${url}refrigerator/${data._id}`,
      headers: {
        token: data.context.token
      }
    });
    return result.data;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}
module.exports = { addToFridge, deleteFromFridge };
