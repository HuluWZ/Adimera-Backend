// Importing the product model to the controller
import NewsModel from "../../model/news.model";
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";
import { IncomingMessage, UserDataType } from "../../middleware/authJWT";
import { showUsersbyId } from "../../utils/db_functions/admin.db";

// This is the controller function to create a new news item
export const create = async (req: IncomingMessage, res: Response) => {
  // Destructure the data sent from req.body
  const { title, description, type, body } = req.body;
  const { userId } = req.userData as UserDataType;

  try {
    // Check if the HTTP method is POST
    if (req.method === "POST") {
      // Check if there are files in the request
      if (req.files) {
        const files = req.files;
        // Use the Mloop function to process the files and get their URLs
        const urls = await Mloop(files);
        // Get user information by user ID
        const user = await showUsersbyId(userId);

        // Create a new news item with the provided data
        const news = await new NewsModel({
          title: title,
          description: description,
          body: body,
          type: type,
          files: urls,
          author: user.fullName
        });

        // Save the news item to the database
        news.save();
        return res.status(201).json({
          success: true,
          message: "News created successfully",
          news,
        });
      } else {
        // If there are no files in the request
        const user = await showUsersbyId(userId);

        // Create a new news item without files
        const news = await new NewsModel({
          title: title,
          description: description,
          body: body,
          type: type,
          author: user.fullName
        });

        // Save the news item to the database
        news.save();
        return res.status(201).json({
          success: true,
          message: "News created successfully",
          news,
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
