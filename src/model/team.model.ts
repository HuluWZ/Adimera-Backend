import { Schema, model } from "mongoose";

// This is the schema for the team  mongoose model
const Teamchema = new Schema({
  title: { type: String },
  name: { type: String },
  files: { type: Array },
});

export default model("Team", Teamchema);
