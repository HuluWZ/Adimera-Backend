// Importing the hero model to the controller
import ADModel from "../../model/ad.model";
import { Request, Response } from "express";
import { loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  // Destruct the data sent from req.body
  const { title, link, adType} = req.body;

  // Check if the request method is POST
  try {
    if (req.method !== "POST") {
      // If the request method is not POST, return a 405 Method Not Allowed response
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }

    // If there are files attached to the request, then process them
    if (req.files) {
      // Get the files from the request
      const files = req.files;

      // Loop through the files and upload them to the database
      const urls = await loop(files);

      // Create a new ADModel instance with the title, link, and file URLs
      const ad = await new ADModel({
        title: title,
        link: link,
        files: urls,
        adType: adType
      });

      // Save the ADModel instance to the database
      ad.save();

      // Return a success response to the client
      return res.status(201).json({
        success: true,
        message: "ad created sucessfully",
        data: ad,
      });
    }
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response to the client
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
