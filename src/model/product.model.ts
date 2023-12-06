import { Schema, model } from "mongoose";

// This is the schema for the hero  mongoose model
const productSchema = new Schema({
  name: { type: String,required: true,unique:true },
  description: { type: String },
  code: { type: String },
  price: {type: Number, required:[true,"price is required"]},
  image: [{type:String,required:true}],
  uploadedBy: {type: Schema.Types.ObjectId, ref:"Admin",} ,
  category: {type: Schema.Types.ObjectId, ref: "Category"},
  color: { type: String },
  size: { type: String },
  quantity: { type: Number, default:1 },
  totalRate: { type: String },
},
{timestamps: true}
);

export default model("Product", productSchema);
