import { ObjectId } from "mongoose";

export interface Product {
    name: string,
    description: string;
    code: string;
    price: number;
    image: [];
    uploadedBy: string;
    category: string;
    color: string;
    size: string;
    quantity: number;
    totalRate: string, 
  }
  
export interface ProductModelId extends Product {
    _id:ObjectId, 
  }
  
  