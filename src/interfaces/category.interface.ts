import { ObjectId } from "mongoose";

export interface Category {
    name: string,
    description: string;
    image: string, 
  }
  
export interface CategoryModelId extends Category {
    _id:ObjectId, 
  }
  
  