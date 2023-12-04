import { Schema, model } from "mongoose";

// This is the schema for the faq  mongoose model
const FaqSchema = new Schema({
  question: { type: String },
  answer: { type: String },
});

export default model("FAQ", FaqSchema);
