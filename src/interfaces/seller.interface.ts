//Typescript Interface for Admin

import { ObjectId } from "mongoose";

export interface Seller {
    firstName: string,
    lastName: string,
    email: string,
    password: string;
    phone: string, 
    status: string,
    address: string,
  }
  
export interface SellerModelID extends Seller {
    _id:ObjectId, 
  }
  