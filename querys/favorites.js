const axios = require("axios");
var Redis = require("ioredis");
const redis = new Redis();
const url = "http://localhost:3001/";

async function getFav(data) {
  //   console.log(data.context.token);
  const result = await axios({
    method: "GET",
    url: `${url}favorites`,
    headers: {
      token: data.context.token
    }
  });
  return result.data;
}

async function addTofav({ token, data }) {
  const result = await axios({
    method: "POST",
    url: `${url}favorites/${data.idAPI}`,
    headers: {
      token
    },
    data: {
      name: data.name,
      cookingSteps: data.cookingSteps,
      nutrition: data.nutrition,
      servingTime: data.servingTime,
      image_url_recipe: data.image_url_recipe
    }
  });

  return result.data;
}

async function removeFromFav({ token, data }) {
  console.log(data);
  const result = await axios({
    method: "DELETE",
    url: `${url}favorites/${data}`,
    headers: {
      token
    }
  });

  return result.data;
}

module.exports = { getFav, addTofav, removeFromFav };
