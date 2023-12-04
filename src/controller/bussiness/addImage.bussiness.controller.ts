import { Request, Response } from "express";
//Imporing file system library
import {  loop } from "../../utils/db_functions/help";
import businessModel from "../../model/bussiness.model";

export const addImage = async (req: Request, res: Response) => {

  // Destructure the ID from the request parameters
  const { id } = req.params;

  // Try to add the image to the business
  try {
    // Check if the request method is POST
    if (req.method === "POST") {
      // Check if there are any files in the request
      if (req.files) {
        // Get the files from the request
        const files = req.files;

        // Use the loop function to upload the files to the cloud and get their URLs
        const urls = await loop(files);

        // Find the business with the specified ID
        const verifyItem = await businessModel.findOne({ _id: id });

        // If the business is not found, return a 404 Not Found response
        if (!verifyItem) {
          return res.status(404).json({
            message: "business not found",
            status: false,
          });
        }

        // Add the image URLs to the business's files array
        const filesarray = verifyItem.files;
        filesarray.push(urls);

        // Save the business changes
        verifyItem.save();

        // Return a success response
        return res.status(201).json({
          success: true,
          message: "image added sucessfully",
        });
      }
    } else {
      // If the request method is not POST, return a 405 Method Not Allowed response
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
