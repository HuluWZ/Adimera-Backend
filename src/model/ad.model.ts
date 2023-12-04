import { Schema, model } from "mongoose";
// This is the schema for the Advirtisment mongoose model
const AdSchema = new Schema({
  title: { type: String },
  link: { type: String },
  adType: { type:String},
  files: { type: Array },
  createdAt: {
    type: Date, 
    default: Date.now
}
});
//exporting the model
export default model("AD", AdSchema);
