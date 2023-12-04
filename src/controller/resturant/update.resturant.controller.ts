// Importing the restaurant model to the controller
import restaurantModel from "../../model/resturant.model";
import { Request, Response } from "express";

export const update = async (req: Request, res: Response) => {
  // Destructure the data sent from req.body
  const { name, description, location, type, rating } = req.body;
  // Destructure the 'id' from req.params
  const { id } = req.params;
  // Create an object with the update data
  const updateData = {
    name: name,
    description: description,
    location: location,
    rating: rating,
    type: type,
  };
  // Find the restaurant by its ID
  const restaurants = await restaurantModel.findOne({ _id: id });

  // Check if the HTTP method is not PUT
  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!restaurants) {
      return res.status(400).json({
        success: false,
        message: "Restaurant not found",
      });
    }
    // Update the restaurant data with the provided updateData
    restaurants.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        // If the update operation fails, send a 404 Not Found response
        res.status(404).send({
          message: `Cannot update restaurant with id=${id}. Maybe the restaurant was not found!`,
        });
      } else {
        // Send a success message if the update is successful
        return res
          .status(201)
          .json({ message: "Restaurant updated successfully." });
      }
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
