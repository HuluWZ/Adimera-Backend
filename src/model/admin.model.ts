import { Schema, model } from "mongoose";

// This is the schema for the admin users mongoose model
const AdminSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "fullname is required."],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "phone number is required"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  firstTimeLogin: {
    type: Boolean,
    default: true
  },
});


//exporting the model
export default model("Admin", AdminSchema);
