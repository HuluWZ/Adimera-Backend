import CarModel from "../../model/car.model";
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const {
    //Typescript Interface for CAR

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

  //Start a try block to handle any errors that may occur
  try {

    //Check if the req.method is equal to POST. If it is not, then returns a 405 Method Not Allowed response with an error message
    if (req.method === "POST") {

      //Check if the req.files object is not null. If it is, then returns a 403 Forbidden response with an error message
      if (req.files) {

        //Assign the req.files object to the files variable
        const files = req.files;

        //Call the Mloop() function to upload the files to a cloud storage provider. The urls variable is assigned the array of URLs of the uploaded files
        const urls = await Mloop(files);

        //Creating the new car
        const car = await new CarModel({
          category: category,
          year: year,
          bodyType: bodyType,
          engine: engine,
          transmission: transmission,
          color: color,
          price: price,
          type: type,
          files: urls,
          phoneNumber:phoneNumber,
          dealershipName:dealershipName 

        });

        //Save the car
        car.save();

        //Return a 201 Created response with a success message
        return res.status(201).json({
          success: true,
          message: "car added sucessfully",
        });
      } else {
        //Return a 403 Forbidden response with an error message
        return res.status(403).json({
          success: true,
          message: "At least 3 Images are required",
        });
      }
    } else {
      //Return a 405 Method Not Allowed response with an error message
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
