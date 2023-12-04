// Importing the express Request and Response interfaces.
import { Request, Response } from "express";

// Importing the Mloop function from the utils/db_functions/help module.
import { Mloop, loop } from "../../utils/db_functions/help";

// Importing the NewsModel class from the model/news.model module.
// import NewsModel from "../../model/news.model";

// Export the addImage function.
export const Image = async (req: Request, res: Response) => {
  // Destructure the id from the request parameters.
  const { id } = req.params;

  // Try to add the image to the news with the specified id.
  try {
    // Check if the request method is POST.
    if (req.method === "POST") {
      // Check if the request has any files.
      if (req.files) {
        // Get the files from the request.
        const files = req.files;

        // Upload the files to the cloud and get the URLs.
        const urls = await loop(files);

        // Get the news with the specified id.
        // const verifyItem = await NewsModel.findOne({ _id: id });

        // // Check if the news was found.
        // if (!verifyItem) {
        //   // Return a 404 Not Found response if the news was not found.
        //   return res.status(404).json({
        //     message: "news not found",
        //     status: false,
        //   });
        // }

        // Get the files array from the news.
        // Return a 201 Created response with a success message.
        return res.status(201).json({
          success: true,
          message: "image added sucessfully",
          urls
        });
      } else {
        // Return a 400 Bad Request response if the request does not have any files.
        return res.status(400).json({
          message: "no files uploaded",
          success: false,
        });
      }
    } else {
      // Return a 405 Method Not Allowed response if the request method is not POST.
      return res.status(405).json({
        err: `${req.method} method not allowed`,
      });
    }
  } catch (error) {
    // Catch any errors that occur and return a 412 Precondition Failed response.
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
