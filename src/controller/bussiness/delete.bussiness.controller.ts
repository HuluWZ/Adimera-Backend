//Importing the product model to the controller
import { Request, Response } from "express";
import businessModel from "../../model/bussiness.model";

export const deletebusiness = async (req:Request, res:Response) => {
  // Destructure the id from the request parameters
  const { id } = req.params;

  // Try to delete the business
  try {
    // Fetch the business with the specified ID
    const business = await businessModel.findOne({ _id: id });

    // If the business is not found, return a 404 Not Found response
    if (!business) {
      return res.status(404).json({
        success: false,
        message: "business not found",
      });
    }

    // Delete the business from the database
    await businessModel.deleteOne({ _id: id });

    // Return a success response
    return res.status(200).json({
      success: true,
      message: "business deleted sucessfully",
    });
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
}
