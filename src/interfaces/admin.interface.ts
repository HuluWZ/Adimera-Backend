//Typescript Interface for Admin

import { ObjectId } from "mongoose";

export interface Admin {
    fullName: string,
    email: string,
    password: string;
    phoneNumber: string
  }
  
export interface AdminModelID extends Admin {
    _id:ObjectId, 
    firstTimeLogin:boolean
  }
  