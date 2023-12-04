import { Schema, model } from "mongoose";

// This is the schema for the news  mongoose model
const newsSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    body: {
        type: String
    },
    files: {
        type: Array
    }, 
    author: {
        type: String
    }, 
    type: {
        type:String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }, 
    count: {
        type:Number, 
        default: 0
    }, 
    view: {
        type:Boolean, 
        default: true
    }
});

export default model("News", newsSchema);
