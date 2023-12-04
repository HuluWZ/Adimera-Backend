import { Schema, model } from "mongoose";

const userSchema = new Schema({
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
});

export default model("User", userSchema);
