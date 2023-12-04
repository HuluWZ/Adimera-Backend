import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/news.db";

// This is a controller function for deleting an image associated with a news item
export const deleteImage = async (req: Request, res: Response) => {
    // Destructure the data sent from req.params
    const { newsId, id } = req.params;

    try {
        // Check if the HTTP method is DELETE
        if (req.method === 'DELETE') {
            // Use the showSingle function to verify and retrieve the news item
            const verifyItem = await showSingle(newsId);
            if (!verifyItem) {
                // If the news item is not found, return a 404 Not Found response
                return res.status(404).json({
                    message: "News not found",
                    status: false
                });
            }

            // Get the array of files associated with the news item
            const filesarray = verifyItem.files;
            // Filter the files array to remove the image with the specified 'id'
            const newfilesarray = filesarray.filter((image) =>
                image.id !== "Images/" + id
            );
            // Update the news item's files array with the filtered array
            verifyItem.files = newfilesarray;
            // Save the updated news item
            verifyItem.save();

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
