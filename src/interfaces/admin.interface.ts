//Typescript Interface for Admin

import { ObjectId } from "mongoose";

export interface Admin {
    firstName: string,
    lastName: string,
    email: string,
    password: string;
    phone: string, 
    status: string
  }
  
export interface AdminModelID extends Admin {
    _id:ObjectId, 
    firstTimeLogin:boolean
  }
  