import { Schema, model } from "mongoose";


// This is the schema for the hero  mongoose model
const jobtypeSchema = new Schema({
  name: { type: String },
  
});

export default model("Job", jobtypeSchema);
