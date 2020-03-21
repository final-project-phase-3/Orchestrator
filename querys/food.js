const axios = require('axios')
var Redis = require('ioredis');
const {ApolloError} = require('apollo-server')
const redis = new Redis()
const url = 'http://localhost:3001/'

async function readImage({token,imageBase64}){
  try {
    const responseUpload = await axios({
      url:`${url}processImage`,
      method:'POST',
      headers:{
        token
      },
      data:{
        imageBase64
      }
    })
    
    const responseImagga = await axios({
      url:`${url}processImage`,
      method:"GET",
      headers:{
        token
      },
      data:{
        imageUrl:responseUpload.data.imageUrl
      }
    })

    const responseAddIngridient = await axios({
      url:`${url}refrigerator`,
      method:'POST',
      headers:{
        token
      },
      data:{
        ingredient:{
          name:responseImagga.data.name,
          image_url:responseUpload.data.imageUrl
        }
      }
    })
    console.log(responseAddIngridient)
    return {
      name:responseImagga.data.name,
      imageUrl:responseUpload.data.imageUrl,
      msg:"New Ingredient"
    }
  } catch (error) {
    console.log(error)
    return new ApolloError(error.response.data.msg,error.response.status)
  }
}

async function getRecipes(data){
  console.log(data,"<<<")
  try {
    const response = await axios.post(`${url}food/recipe`,{data})
    console.log(response.data.payload,"Data")
    return response.data.payload
  } catch (error) {
    console.log(error,"error")
    return new ApolloError(error.response.data.msg,error.response.status)
  }
}

async function getUser(token){
  try {
    const response = await axios({
      method:"GET",
      url:`${url}user`,
      headers:{
        token
      }
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error.response)
    return new ApolloError(error.response.data.msg,error.response.status)
  }
}


module.exports = {
  readImage,
  getRecipes,
  getUser
}
