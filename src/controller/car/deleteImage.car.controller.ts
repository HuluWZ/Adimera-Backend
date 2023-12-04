import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/car.db";

export const deleteImage = async (req: Request, res: Response) => {
  //Destructures the carId and id properties from the req.params object
  const { carId, id } = req.params;

  //Starts a try block to handle any errors that may occur
  try {
    //Checks if the req.method is equal to DELETE. If it is not, then returns a 405 Method Not Allowed response with an error message
    if (req.method === "DELETE") {

      //Calls the showSingle() function to find the car with the specified carId. The verifyItem variable is assigned the car object
      const verifyItem = await showSingle(carId);

      //Checks if the verifyItem variable is not null. If it is, then returns a 404 Not Found response with an error message
      if (!verifyItem) {
        return res.status(404).json({
          message: "car not found",
          status: false
        });
      }

      //Assigns the verifyItem.files array to the filesarray variable
      const filesarray = verifyItem.files;

      //Filters the filesarray array to remove the image with the specified id. The newfilesarray variable is assigned the filtered array
      const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);

      //Sets the verifyItem.files property to the newfilesarray array
      verifyItem.files = newfilesarray;

      //Saves the verifyItem car
      verifyItem.save();

      //Returns a 201 Created response with a success message
      return res.status(201).json({
        success: true,
        message: "image deleted sucessfully"
      });
    } else {
      //Returns a 405 Method Not Allowed response with an error message
      return res.status(405).json({
        err: `${req.method} method not allowed`
      });
    }
  } catch (error) {
    //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
    return res.status(412).json({
      success: false,
      message: error
    });
  }
};
