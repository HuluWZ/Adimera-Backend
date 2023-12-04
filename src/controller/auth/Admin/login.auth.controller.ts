import { Request, Response } from "express";

//Importing JWT from Json Web Token package
import jwt from "jsonwebtoken";

//Importing the bcrypt package
import bcrypt from "bcrypt";

// Importing usermodel from user
// import UserModel from "../../../model/admin.model";
import { showUsersbyEmail } from "../../../utils/db_functions/admin.db";
import { AdminModelID } from "../../../interfaces/admin.interface";

export const login = async (req: Request, res: Response) => {
  // Destructure the email and password from the request body
  const { email, password } = req.body;

  // Get the user with the specified email from the database
  const getUser: AdminModelID | null = await showUsersbyEmail(email);

  // If the user is not found, return a 403 Forbidden response
  if (!getUser) {
    return res.status(403).json({
      message: "Authentication Failed",
    });
  }

  // Compare the password from the request with the user's password
  bcrypt.compare(password, getUser.password).then((response) => {
    // If the passwords do not match, return a 401 Unauthorized response
    if (!response) {
      return res.status(401).json({
        message: "Authentication Failed",
      });
    } else {
      // Generate a JWT token with the user's ID and email
      const jwtToken = jwt.sign(
        {
          userId: getUser._id,
          email: email,
        },
        // Sign the token with the JWT_SECRET environment variable
        process.env.JWT_SECRET as string,
        {
          expiresIn: "24h",
        }
      );

      // Return a success response with the JWT token and the user's ID
      return res.status(200).json({
        accessToken: jwtToken,
        userId: getUser._id,
      });
    }
  }).catch((err) => {
    // If an error occurs, return a 401 Unauthorized response
    return res.status(401).json({
      messgae: err.message,
      success: false,
    });
  });
};
