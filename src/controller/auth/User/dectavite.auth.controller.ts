import {Request, Response } from "express";
//Importing the bcrypt package

// Importing usermodel from user
import UserModel from "../../../model/user.model";

export const deactivate = async (req: Request, res: Response) => {

  // Destructure the password from the request body
  const { id } = req.params

  // Get the user ID from the user data

  // Try to change the user's password
  try {
    // Check if the request method is POST
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "method not allowed", 
            success: false
        })
    }
      // Find the user with the specified ID
      const verifyUser = await UserModel.findOne({ _id: id });

      // If the user is not found, return a 401 Unauthorized response
      if (!verifyUser) {
        return res.status(401).json({
          message: "user not found",
        });
      }

      // Hash the password using bcrypt
      verifyUser.status = "DEACTIVATED"
      verifyUser.save();
      return res.status(201).json({
        message: "user deactivated", 
        success: true
      })
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response to the client
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
