import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/resturant.db";

// This is a controller function for deleting an image associated with a restaurant
export const deleteImage = async (req: Request, res: Response) => {
    // Destructure the data sent from req.params
    const { resturantId, id } = req.params;

    try {
        // Check if the HTTP method is DELETE
        if (req.method === 'DELETE') {

            // Use the 'showSingle' function to verify and retrieve the restaurant
            const verifyRestaurant = await showSingle(resturantId);
            if (!verifyRestaurant) {
                // If the restaurant is not found, return a 404 Not Found response
                return res.status(404).json({
                    message: "Restaurant not found",
                    status: false
                });
            }

            // Get the array of files associated with the restaurant
            const filesArray = verifyRestaurant.files;
            // Filter the files array to remove the image with the specified 'id'
            const newFilesArray = filesArray.filter((image) =>
                image.id !== "Images/" + id
            );
            // Update the restaurant's files array with the filtered array
            verifyRestaurant.files = newFilesArray;
            // Save the updated restaurant
            verifyRestaurant.save();

            // Return a success message
            return res.status(201).json({
                success: true,
                message: "Image deleted successfully",
            });
        } else {
            // If the HTTP method is not DELETE, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`
            });
        }

    } catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).json({
            success: false,
            message: error
        });
    }
}
