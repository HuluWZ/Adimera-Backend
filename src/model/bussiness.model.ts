import { Schema, model } from "mongoose";


const featuredSchema = new Schema({
    rating: {
        type: String
    }, 
    author: {
        type:String
    }, 
    review:{
        type:String
    }
})
// This is the schema for the business  mongoose model
const businessSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String
    },
    location: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    rating: {
        type: Number
    },
    email: {
        type: String
    },
    type: {
        type: String
    },
    subType: {
        type: String
    },
    files: {
        type: Array
    },
    average: {
        type: String
    },
    totalCount: {
        type: Number
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
    featured:{
        type: [featuredSchema], default: []
    }


});
export default model("business", businessSchema);
