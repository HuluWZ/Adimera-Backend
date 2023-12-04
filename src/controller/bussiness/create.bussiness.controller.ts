//Importing the product model to the controller
import businessModel from "../../model/bussiness.model";
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {

  // Destructure the data sent from req.body
  const { name, description, link, rating, location, email, type, phoneNumber, subType } = req.body;

  // Try to create the business
  try {
    // Check if the request method is POST
    if (req.method === "POST") {
      // Check if there are any files in the request
      if (req.files) {
        // Get the files from the request
        const files = req.files;

        // Use the Mloop function to upload the files to the cloud and get their URLs
        const urls = await Mloop(files);

        // Create a new business object with the data from the request body and the uploaded file URLs
        const business = await new businessModel({
          name: name,
          description: description,
          link: link,
          files: urls,
          location: location,
          phoneNumber: phoneNumber,
          rating: rating,
          email: email,
          type:type,
          subType: subType
        });

        // Save the new business to the database
        business.save();

        // Return a success response with the new business data
        return res.status(201).json({
          success: true,
          message: "business created sucessfully",
          business
        });
      } else {
        // If there are no files in the request, create a new business object with the data from the request body
        const business = await new businessModel({
          name: name,
          description: description,
          link: link,
          location: location,
          phoneNumber: phoneNumber,
          rating: rating,
          email: email,
          type:type,
          subType: subType
        });

        // Save the new business to the database
        business.save();

        // Return a success response with the new business data
        return res.status(201).json({
          success: true,
          message: "business created sucessfully",
          business
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
