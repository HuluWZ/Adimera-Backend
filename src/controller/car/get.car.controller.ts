import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/car.db";

//Get all cars async function
export const getCars = async (req:Request, res:Response) => {
  //Fetching all cars from the database and assigning it to cars
  const cars = await getAll();

  //Reverse the array to get the latest cars at first
  cars.reverse();

  //Responding the data to any request made
  return res.status(200).json(cars);
};

//Get Single car
export const showCar = async (req:Request, res:Response) => {
  //Destructing id from req.params
  const { id } = req.params;

  //Fetching single car using the id in the req.params from the database and assigning it to car
  const car = await showSingle(id);

  try {
    if (car) {
      //Responding the data to any request made
      return res.status(200).json(car);
    }
  } catch (error) {
    //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
