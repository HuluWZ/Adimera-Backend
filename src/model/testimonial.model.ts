import { Schema, model } from "mongoose";

// This is the schema for the testimonial  mongoose model
const TestimonialSchema = new Schema({
  name: { type: String },
  message: { type: String },
  status: { type: String }
});

export default model("testimonial", TestimonialSchema);
