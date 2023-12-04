import { Schema, model } from "mongoose";


// This is the schema for the hero  mongoose model
const heroSchema = new Schema({
  title: { type: String },
  link: { type: String },
  files: { type: Array },
});

export default model("Hero", heroSchema);
