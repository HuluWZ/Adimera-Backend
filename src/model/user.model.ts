import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "FirstName is required."],
    minlength: 3,
  },
  lastName: {
    type: String,
    required: [true, "LastName is required."],
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"]
  }, 
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 13,
    required: [true, "Phone number is required"],
  },
  role: {
    type:String,
    default: "0"
  },
  address: {
    type:String
  },
  profilePicture: {
    type:String
  },
  gender: {
    type:String
  },
  activationCode: {
    type:String
  },
  passCode: {
    type:String
  },
  status: {
    type:String,
    default :"0"
  },
  agreeStatus:{
    type: String,
  },
},
  { timestamps: true }
);

export default model("User", userSchema);
