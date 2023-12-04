// Importing the product model to the controller
import { Request, Response } from "express";
import NewsModel from "../../model/news.model";

// This is a controller function for deleting a news item
export const deletenews = async (req: Request, res: Response) => {
  // Destructure the 'id' from req.params
  const { id } = req.params;

  try {
    // Delete a single news item using the 'id' from req.params in the database
    await NewsModel.deleteOne({ _id: id });

    // Since there is no data to be returned, we simply send a success message
    return res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
}
