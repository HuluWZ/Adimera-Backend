//Importing Libraries
import { Schema, model } from "mongoose";

//using monoose to create the portfolio schema
const portfolioSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
  },
  files: {
    type: Array,
  },
});
export default model("Portfolio", portfolioSchema);
