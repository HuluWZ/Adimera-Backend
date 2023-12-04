// Import the express Request and Response interfaces
import { Request, Response } from "express";

// Import the AboutModel class
import AboutModel from "../../model/about.model";

// Export an async function to delete an about record
export const deleteAbout = async (req: Request, res: Response) => {
  // Get the `id` parameter from the request
  const { id } = req.params;

  // Try to delete the about record with the specified ID
  try {
    const removed = await AboutModel.findByIdAndDelete(id);

    // If the about record was not deleted successfully, throw an error
    if (!removed) throw Error("Something went wrong");

    // Send a success response to the client
    res
      .status(200)
      .json({ message: "About deleted successfully", success: true });
  } catch (error) {
    // If an error occurs, send an internal server error response to the client
    res.status(500).json({ message: "Server error", success: false });
  }
};
