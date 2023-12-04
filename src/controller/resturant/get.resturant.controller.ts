import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/resturant.db";

// This is a controller function for getting a list of all restaurants
export const getresturants = async (req: Request, res: Response) => {
  // Retrieve all restaurant records from the database
  const restaurants = await getAll();
  // Respond with a 200 OK status and send the list of restaurants
  res.status(200).send(restaurants);
};

// This is a controller function for getting a single restaurant by ID
export const getresturant = async (req: Request, res: Response) => {
  // Destructure the 'id' from req.params
  const { id } = req.params;
  // Retrieve a single restaurant record from the database using the provided ID
  const restaurant = await showSingle(id);
  // Respond with a 200 OK status and send the single restaurant record
  res.status(200).send(restaurant);
};
