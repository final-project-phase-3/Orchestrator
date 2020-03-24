const axios = require("axios");
var Redis = require("ioredis");
const redis = new Redis();
const url = "http://localhost:3001/";
const { ApolloError } = require("apollo-server");

async function register(data) {
  try {
    const response = await axios({
      method: "POST",
      url: `${url}user/register`,
      data: {
        username: data.username,
        password: data.password,
        email: data.email
      }
    });
    return response.data.userRegistered;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

async function login(data) {
  try {
    const response = await axios({
      method: "POST",
      url: `${url}user/login`,
      data: {
        input: data.input,
        password: data.password
      }
    });
    return response.data.userData;
  } catch (error) {
    return new ApolloError(error.response.data.msg, error.response.status);
  }
}

module.exports = { register, login };
