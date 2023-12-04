import { Request, Response } from "express";
import ADModel from "../../model/ad.model";
// import  user from "../../model/user"
export const deletead = async (req: Request, res: Response) => {
  // Get the ID of the ad to be deleted from the request params
  const { id } = req.params;

  // Try to delete the ad record with the specified ID
  try {
    const removed = await ADModel.findByIdAndDelete(id);

    // If the ad record was not deleted successfully, throw an error
    if (!removed) throw Error("Something went wrong ");

    // Return a success response to the client
    res
      .status(200)
      .json({ message: "ad deleted successfully", success: true });
  } catch (error) {
    // If an error occurs, return a server error response to the client
    res.status(500).json({ message: "server error", success: false });
  }
};
