import { Schema, model } from "mongoose";

// This is the schema for the contact-info  mongoose model
const ContactInfoSchema = new Schema({
    name: { type: String },
    value: { type: String },
    type: { type: String },
 
});

export default model("ContactInfo", ContactInfoSchema);


