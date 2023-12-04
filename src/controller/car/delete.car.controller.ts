//Importing the product model to the controller
import { Request, Response } from "express";
import CarModel from "../../model/car.model";

export const deleteCar = async (req: Request, res: Response) => {
  //Destructing id from req.params
  const { id } = req.params;

  //Start a try block to handle any errors that may occur
  try {
    //Fetching single House
    //using the id in the req.params from the database and assigning it to news
    await CarModel.deleteOne({ _id: id });

    //Since there is no data to be responded we simple send a message
    return res.status(200).json({
      success: true,
      message: "car removed from list",
    });
  } catch (error) {
    //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
