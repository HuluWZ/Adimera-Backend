import { Schema, model } from "mongoose";

// This is the schema for the news  mongoose model
const JobPostSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    company: {
        type: String
    },
    location: {
        type: String
    }, 
    skills:{
        type:String
    },
    salary: {
        type: String
    }, 
    link: {
        type:String
    },
    jobType: {
        type:String
    },
    jobCategory: {
        type:String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});



export default model("JobPost", JobPostSchema);
