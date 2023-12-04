import { ObjectId } from "mongoose";

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string;
    phone: string, 
    status: string
    // files: []
  }
  
export interface UserModelId extends User {
    _id:ObjectId, 
  }
