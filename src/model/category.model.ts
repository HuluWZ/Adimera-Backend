import { Schema, model } from "mongoose";


// This is the schema for the hero  mongoose model
const categorySchema = new Schema({
  name: { type: String,required: true,unique:true },
  description: { type: String },
  image: { type: String },
},{timestamps: true});

export default model("Category", categorySchema);
