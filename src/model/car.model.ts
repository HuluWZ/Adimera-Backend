import { Schema, model } from "mongoose";

// This is the schema for the car  mongoose model
const CarSchema = new Schema({
    category: {
        type: String,
    },
    year: {
        type: String
    },
    bodyType: {
        type: String,
    },
    type: {
        type: String
    },
    engine: {
        type: String
    },
    transmission: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: String
    },
    files: {
        type: Array,
    },
    condition: {
        type: String
    },
    createdAt: {
        type: Date
    },
    status:
    {
        type: String,
        default: "AVAILABLE"
    },
    phoneNumber:{
        type:String
    }, 
    dealershipName:{
        type:String
    }

});

export default model("Car", CarSchema);
