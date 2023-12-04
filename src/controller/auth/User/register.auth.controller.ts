import { Request, Response } from "express";

//Importing the express-async-handler package

//Importing the bcrypt package
import bcrypt from "bcrypt";

//Importing the user model
import UserModel from "../../../model/user.model";
import { showUsersbyEmail } from "../../../utils/db_functions/user.db";

export const register = async (req: Request, res: Response) => {

  // Destructure the inputs from req.body
  const { fullName, email, password, phoneNumber }: {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
  } = req.body;

  // Verify that the email address is not already in use
  const verifyUser = await showUsersbyEmail(email);

  // If the email address is already in use, return a 403 Forbidden response
  if (verifyUser) {
    return res.status(403).json({
      message: "email already registered",
    });
  }

  // Hash the password using bcrypt
  bcrypt.hash(password, 10).then((hash) => {
    // Create a new user object with the hashed password
    const user = new UserModel({
      email: email,
      fullName: fullName,
      password: hash,
      phoneNumber: phoneNumber,
    });

    // Save the new user to the database
    user.save().then((response) => {
      // Return a success response with the user's data
      return res.status(201).json({
        message: "user successfully registerd!",
        response,
        success: true,
      });
    }).catch((error) => {
      // If an error occurs, return a 500 Internal Server Error response
      res.status(500).json({
        error: error,
      });
    });
  });
};
