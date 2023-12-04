//Importing Libraries
import { Schema, model } from "mongoose";


const featuredSchema = new Schema({
  rating: {
    type: String
  },
  author: {
    type: String
  },
  avatar: {
    type: Array
  },
  review: {
    type: String
  }
})
//using monoose to create the resturant schema
const resturantSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number
  },
  type: {
    type: String
  },
  files: {
    type: Array,
  },
  average: {
    type: String
  },
 
  counts: {
    type: Array, default: [
      { rating: 5, count: 0 },
      { rating: 4, count: 0 },
      { rating: 3, count: 0 },
      { rating: 2, count: 0 },
      { rating: 1, count: 0 },

    ]
  },
  featured: {
    type: [featuredSchema], default: []
  }
});
export default model("resturant", resturantSchema);
