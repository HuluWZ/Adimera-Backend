// Importing the NewsModel from the model
import NewsModel from "../../model/news.model";
import { Request, Response } from "express";

// This is a controller function for updating a news item
export const update = async (req: Request, res: Response) => {
  // Destructure the data sent from req.body
  const { title, description, type, body } = req.body;
  // Destructure the 'id' from req.params
  const { id } = req.params;
  // Create an object with the update data
  const updateData = {
    title,
    description,
    body,
    type,
  };
  // Find the news item by its ID
  const news = await NewsModel.findOne({ _id: id });

  // Check if the HTTP method is not PUT
  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    // Update the news item data with the provided updateData
    news.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        // If the update operation fails, send a 404 Not Found response
        res.status(404).send({
          message: `Cannot update news with id=${id}. Maybe the news was not found!`,
        });
      } else {
        // Send a success message if the update is successful
        return res
          .status(201)
          .json({ message: "News updated successfully." });
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
