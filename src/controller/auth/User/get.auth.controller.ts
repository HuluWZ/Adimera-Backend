import { Request, Response } from "express";
//Importing the express-async-handler package
import { getAllUsers, showUsersbyId } from "../../../utils/db_functions/user.db";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT"
//Importing the uuidv4 package to generate userId

export const getUsers = async (req:Request, res:Response) => {
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


export const MyProfile = async (req:IncomingMessage, res:Response) => {
  // Define an async function called getuser that takes two parameters:
  // req: A Request object representing the incoming HTTP request
  // res: A Response object representing the outgoing HTTP response
  const { userId } = req.userData as UserDataType;

  // Get the user with the specified ID from the database using the showUsersbyId function
  const user = await showUsersbyId(userId);

  // If the user is not found, return a 404 Not Found response to the client
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  // Send a success response to the client with the user data
  res.status(200).send(user);
};
