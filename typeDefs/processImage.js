const { gql } = require('apollo-server');
const typeDefs = gql`
  type responseProcess{
    imageUrl: String,
    msg: String
  }
  type Query {
    processImage(imageUrl:String):responseProcess
  }

`

module.exports = typeDefs


// type movie{
//   _id:ID
//   title: String
//   overview: String
//   poster_path: String
//   popularity: Float
//   tags: [String]
// }

// type tvseries{
//   _id:ID
//   title: String
//   overview: String
//   poster_path: String
//   popularity: Float
//   tags: [String]
// }


// type entertainMe{
//   movies: [movie],
//   tvseries: [tvseries]
// }

// type Query {
//   entertainMe: entertainMe
//   detailMovie(input:movieID): movie
// }
// input movieInput{
//   title:String!,
//   overview: String!
//   poster_path: String!
//   popularity: Float!
//   tags: [String]!,
//   type: String,
// }
// input movieUpdate{
//   id:String!,
//   title:String!,
//   overview: String!
//   poster_path: String!
//   popularity: Float!
//   tags: [String]!,
//   type: String
// }
// input movieID{
//   id: String!,
//   type: String,
// }