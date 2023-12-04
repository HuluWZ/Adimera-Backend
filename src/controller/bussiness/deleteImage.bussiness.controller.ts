import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/business.db";
export const deleteImage = async (req: Request, res: Response) => {
  // Destruct the data sent from req.body
  // const uploader = async (path) => await uploads(path, "Images")
  const { businessId, id } = req.params

  try {
    // Check if the request method is DELETE
    if (req.method === 'DELETE') {
      // Get the business with the specified ID
      const verifyItem = await showSingle(businessId);

      // If the business is not found, return a 404 Not Found response
      if (!verifyItem) {
        return res.status(404).json({
          message: "business not found",
          status: false
        });
      }

      // Get the business's files array
      const filesarray = verifyItem.files;

      // Filter the files array to remove the image with the specified ID
      const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);

      // Update the business's files array with the filtered array
      verifyItem.files = newfilesarray;

      // Save the business changes
      verifyItem.save();

      // Return a success response
      return res.status(201).json({
        success: true,
        message: "image deleted sucessfully"
      });
    } else {
      // If the request method is not DELETE, return a 405 Method Not Allowed response
      return res.status(405).json({
        err: `${req.method} method not allowed`
      });
    }
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response
    return res.status(412).json({
      success: false,
      message: error
    });
  }
}
