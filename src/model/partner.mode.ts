import { Schema, model } from "mongoose";

// This is the schema for the partner  mongoose model
const PartnerSchema = new Schema({
  name: { type: String },
  files: { type: Array },
});

export default model("Partner", PartnerSchema);
