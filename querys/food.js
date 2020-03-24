const axios = require("axios");
var Redis = require("ioredis");
const { ApolloError } = require("apollo-server");
const redis = new Redis();
const url = "http://localhost:3001/";

async function readImage({ token, imageUrl }) {
  try {
    // const responseUpload = await axios({
    //   url:`${url}processImage`,
    //   method:'POST',
    //   headers:{
    //     token
    //   },
    //   data:{
    //     image
    //   }
    // })
    console.log(imageUrl);
    const responseImagga = await axios({
      url: `${url}processImage`,
      method: "GET",
      headers: {
        token
      },
      data: {
        imageUrl: imageUrl
      }
    });
    return responseImagga.data;

    // const responseAddIngridient = await axios({
    //   url:`${url}refrigerator`,
    //   method:'POST',
    //   headers:{
    //     token
    //   },
    //   data:{
    //     ingredient:{
    //       name:responseImagga.data.name,
    //       image_url:imageUrl
    //     }
    //   }
    // })
    // console.log(responseAddIngridient)
    // return {
    //   name:responseImagga.data.name,
    //   imageUrl:imageUrl,
    //   msg:"New Ingredient"
    // }
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function getRecipes(data) {
  console.log(data, "<<<");
  try {
    const response = await axios.post(`${url}food/recipe`, { data });
    return response.data.payload;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function searchRecipes(data) {
  try {
    const response = await axios.post(`${url}food/searchRecipe`, { data });
    return response.data.payload;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function getRandomRecipes(data) {
  try {
    const response = await axios.get(`${url}food/randomRecipe`);
    return response.data.payload;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function getUser(token) {
  try {
    const response = await axios({
      method: "GET",
      url: `${url}user`,
      headers: {
        token
      }
    });
    return response.data;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

module.exports = {
  readImage,
  getRecipes,
  getUser,
  searchRecipes,
  getRandomRecipes
};
