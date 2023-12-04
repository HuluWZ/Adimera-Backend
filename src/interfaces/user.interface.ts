//Typescript Interface for Admin

import { ObjectId } from "mongoose";

export interface User {
    fullName: string,
    email: string,
    password: string;
    phoneNumber: string
  }
  
export interface UserModelId extends User {
    _id:ObjectId, 
  }
  