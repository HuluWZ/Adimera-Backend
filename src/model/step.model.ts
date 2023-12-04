import { Schema, model } from "mongoose";


// This is the schema for the step mongoose model
const stepSchema = new Schema({
  title: { type: String },
  description: { type: String },
});

export default model("Step", stepSchema);
