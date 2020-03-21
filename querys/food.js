const axios = require('axios')
var Redis = require('ioredis');
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
    return error.response.data
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
    return error.response.data
  }
}



module.exports = {
  readImage,
  getRecipes
}
