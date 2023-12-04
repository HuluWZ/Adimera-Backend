import { Request, Response } from "express";
import HouseModel from "../../model/car.model";
import carModel from "../../model/car.model";

export const update = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const {
    category,
    year,
    bodyType,
    engine,
    transmission,
    color,
    price,
    type,
    phoneNumber,
    dealershipName 
  } = req.body;

  //Destructing the id from req.params
  const { id } = req.params;

  //Create an object to store the updated data
  const updateData = {
    category,
    year,
    bodyType,
    engine,
    transmission,
    color,
    price,
    type,
    phoneNumber,
    dealershipName 
  };

  //Find the car with the specified id
  const car = await carModel.findOne({ _id: id });

  try {
    //Check if the request method is PUT. If it is not, return a 405 Method Not Allowed response
    if (req.method !== "PUT") {
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }

    //Check if the car was found. If it was not, return a 404 Not Found response
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "car not found",
      });
    }

    //Update the car with the new data
    car.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      //Check if the update was successful. If it was not, return a 404 Not Found response
      if (!data) {
        res.status(404).send({
          message: `Cannot update car with id=${id}. Maybe car was not found!`,
        });
      } else {
        //Return a 201 Created response with a success message
        return res.status(201).json({
          message: "car updated successfully.",
        });
      }
    });
  } catch (error) {
    //Catch any errors that occur and return a 412 Precondition Failed response
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
