// Importing the restaurant model to the controller
import restaurantModel from "../../model/resturant.model";
import { Request, Response } from "express";

// This is a controller function for deleting a single restaurant
export const deleterestaurant = async (req: Request, res: Response) => {
  // Destructure the 'id' from req.params
  const { id } = req.params;

  try {
    // Delete a single restaurant using the 'id' from req.params in the database
    await restaurantModel.deleteOne({ _id: id });

    // Since there is no data to be responded, simply send a success message
    return res.status(200).json({
      success: true,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
