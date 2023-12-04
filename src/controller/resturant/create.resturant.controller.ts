// Importing the restaurant model to the controller
import restaurantModel from "../../model/resturant.model";

// Importing necessary dependencies from Express and a utility function from a custom module
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";

// This is a controller function for creating a new restaurant
export const create = async (req: Request, res: Response) => {
  // Destructure the data sent from req.body
  const { name, description, location, type, rating } = req.body;

  try {
    // Check if the HTTP method is POST
    if (req.method === "POST") {
      // Check if there are files in the request
      if (req.files) {
        const files = req.files;
        // Use the 'Mloop' function to process the files and get their URLs
        const urls = await Mloop(files);

        // Create a new restaurant with the provided data and file URLs
        const restaurant = await new restaurantModel({
          name: name,
          description: description,
          location: location,
          rating: rating,
          type: type,
          files: urls,
        });

        // Save the restaurant to the database
        restaurant.save();
        return res.status(201).json({
          success: true,
          message: "Restaurant created successfully",
          data: restaurant,
        });
      } else {
        // If there are no files in the request, create a restaurant without files
        const restaurant = await new restaurantModel({
          name: name,
          description: description,
          location: location,
          rating: rating,
          type: type,
        });

        // Save the restaurant to the database
        restaurant.save();
        return res.status(201).json({
          success: true,
          message: "Restaurant created successfully",
          data: restaurant,
        });
      }
    } else {
      // If the HTTP method is not POST, return a 405 Method Not Allowed response
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
