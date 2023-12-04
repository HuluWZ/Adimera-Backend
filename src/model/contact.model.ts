import { Schema, model } from "mongoose";

// This is the schema for the contact  mongoose model
const ContactSchema = new Schema({
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  subject: { type: String },
  message: { type: String }
});

export default model("Contact", ContactSchema);
