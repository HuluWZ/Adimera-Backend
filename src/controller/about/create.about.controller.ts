// Importing the about model to the controller
import AboutModel from "../../model/about.model";
import { Request, Response } from "express";
import { loop } from "../../utils/db_functions/help";

// function to create an about
export const create = async (req: Request, res: Response) => {
  // Destruct the data sent from req.body
  const { title, description } = req.body;

  // checking the req.method
  try {
    if (req.method === "POST") {
      // checking if there is an image attached with the request
      if (req.files) {
        const files = req.files;

        // looping the image array
        const urls = await loop(files);

        // creating an about model
        const about = await new AboutModel({
          title: title,
          description: description,
          files: urls,
        });

        // saving about model
        about.save();

        // return sucess message
        return res.status(201).json({
          success: true,
          message: "about created sucessfully",
          data: about,
        });
      } else {
        // if the request doesnot have an image
        const about = await new AboutModel({
          title: title,
          description: description,
        });

        about.save();

        return res.status(201).json({
          success: true,
          message: "about created sucessfully",
          data: about,
        });
      }
    } else {
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
