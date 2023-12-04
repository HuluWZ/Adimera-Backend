// Importing the express Request and Response interfaces.
import { Request, Response } from "express";

// Importing the ContactInfoModel class from the model/contactInfo.model module.
import ContactInfoModel from "../../model/contactInfo.model";

// Export the deleteInfo function.
export const deleteInfo = async (req: Request, res: Response) => {
  // Destructure the id from the request parameters.
  const { id } = req.params;

  // Try to find and delete the contact info with the specified id.
  try {
    const removed = await ContactInfoModel.findByIdAndDelete(id);

    // If the contact info was not found or deleted, throw an error.
    if (!removed) {
      throw new Error("Something went wrong");
    }

    // Return a 200 OK response with a success message.
    res.status(200).json({
      message: "Contact info deleted successfully",
      success: true,
    });
  } catch (error) {
    // Catch any errors that occur and return a 500 Internal Server Error response.
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
