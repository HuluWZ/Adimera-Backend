import { Response } from "express";
//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
import UserModel from "../../../model/admin.model";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";

export const changePassword = async (req: IncomingMessage, res: Response) => {

  // Destructure the password from the request body
  const { password } = req.body;

  // Get the user ID from the user data
  const { userId } = req.userData as UserDataType;

  // Try to change the user's password
  try {
    // Check if the request method is POST
    if (req.method === "POST") {
      // Find the user with the specified ID
      const verifyUser = await UserModel.findOne({ _id: userId });

      // If the user is not found, return a 401 Unauthorized response
      if (!verifyUser) {
        return res.status(401).json({
          message: "user not found",
        });
      }

      // Hash the password using bcrypt
      bcrypt.hash(password, 10).then(async (hash) => {
        // Set the user's password to the hashed password
        verifyUser.password = hash;

        // Set the user's firstTimeLogin flag to false
        verifyUser.firstTimeLogin = false;

        // Save the user changes
        await verifyUser.save();

        // Return a success response to the client
        return res.status(201).json({
          message: "pasword changed successfully",
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
