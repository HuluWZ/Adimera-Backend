// Importing the restaurant model to the controller
import restaurantModel from "../../model/resturant.model";

// Importing the cloudinary config
import { Request, Response } from "express";

// Importing the file system library
import { loop } from "../../utils/db_functions/help";

// This is a controller function for adding an image to a restaurant
export const addImage = async (req: Request, res: Response) => {
  // Destructure the data sent from req.params
  const { id } = req.params;

  try {
    // Check if the HTTP method is POST
    if (req.method === "POST") {
      // Check if there are files in the request
      if (req.files) {
        const files = req.files;
        // Use the 'loop' function to process the files and get their URLs
        const urls = await loop(files);

        // Use the provided ID to find the restaurant in the database
        const verifyRestaurant = await restaurantModel.findOne({ _id: id });
        if (!verifyRestaurant) {
          // If the restaurant is not found, return a 404 Not Found response
          return res.status(404).json({
            message: "Restaurant not found",
            status: false,
          });
        }

        // Get the existing array of files associated with the restaurant
        const filesArray = verifyRestaurant.files;
        // Push the newly obtained URLs into the array
        filesArray.push(urls);
        // Save the restaurant with the updated files array
        verifyRestaurant.save();

        // Return a success message
        return res.status(201).json({
          success: true,
          message: "Image added successfully",
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
