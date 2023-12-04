import { Request, Response } from "express";
//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
import UserModel from "../../../model/user.model";
// import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";


export const resetPassword = async (req: Request, res: Response) => {

  // Get the user ID from the request params
  const { id } = req.params;

  // Check if the request method is POST
  try {
    if (req.method === "POST") {
      // Find the user with the specified ID
      const verifyUser = await UserModel.findOne({ _id: id });

      // If the user is not found, return a 401 Unauthorized response
      if (!verifyUser) {
        return res.status(401).json({
          message: "user not found",
        });
      }

      // Generate a default password
      const password = "060708";

      // Hash the password using bcrypt
      bcrypt.hash(password, 10).then(async (hash) => {
        // Set the user's password to the hashed password
        verifyUser.password = hash;

        // Set the user's firstTimeLogin flag to true

        // Save the user changes
        await verifyUser.save();

        // Return a success response to the client
        return res.status(201).json({
          message: "Password reseted successfully",
          success: true,
        });
      });
    }
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response to the client
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
