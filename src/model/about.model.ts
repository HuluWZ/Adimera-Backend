import { Schema, model } from "mongoose";
// This is the schema for the about model
const AboutSchema = new Schema({
  title: { type: String },
  description: { type: String },
  files: { type: Array },
});

//exporting the model
export default model("About", AboutSchema);
