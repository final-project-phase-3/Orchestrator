const axios = require('axios')
var Redis = require('ioredis');
const redis = new Redis()
const url = 'http://localhost:3001/'
// async function getMovies(){
  
//   const movies = await redis.get('movies')
//   console.log(movies)
//   if(movies){
//     return JSON.parse(movies)
//   }
//   const response = await axios.get('http://localhost:3000/movies')
  
//   redis.set('movies',JSON.stringify(response.data))
//   redis.del('movies')
//   // console.log(response)
//   return response.data
// }

async function readImage(data){
  console.log(data)
  try {
    const response = await axios.get(`${url}processimage`,{data})
    return response.data
  } catch (error) {
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