import { Request, Response } from "express";
//Importing the express-async-handler package
import { getAllUsers, showUsersbyId } from "../../../utils/db_functions/admin.db";

//Importing the uuidv4 package to generate userId

export const getUsers = async (req:Request, res:Response) => {
  // Import the Request and Response objects from the express library
  // Import the getAllUsers and showUsersbyId functions from the admin.db file
  // Import the uuidv4 package to generate user IDs

  // Define an async function called getUsers that takes two parameters:
  // req: A Request object representing the incoming HTTP request
  // res: A Response object representing the outgoing HTTP response

  // Get all users from the database using the getAllUsers function
  const users = await getAllUsers();

  // Send a success response to the client with the users data
  res.status(200).json(users);
};

export const getuser = async (req:Request, res:Response) => {
  // Define an async function called getuser that takes two parameters:
  // req: A Request object representing the incoming HTTP request
  // res: A Response object representing the outgoing HTTP response

  // Get the user ID from the request parameters
  const { id } = req.params;

  // Get the user with the specified ID from the database using the showUsersbyId function
  const user = await showUsersbyId(id);

  // If the user is not found, return a 404 Not Found response to the client
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  // Send a success response to the client with the user data
  res.status(200).send(user);
};
