"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = void 0;
const resturant_db_1 = require("../../utils/db_functions/resturant.db");
// This is a controller function for deleting an image associated with a restaurant
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.params
    const { resturantId, id } = req.params;
    try {
        // Check if the HTTP method is DELETE
        if (req.method === 'DELETE') {
            // Use the 'showSingle' function to verify and retrieve the restaurant
            const verifyRestaurant = yield (0, resturant_db_1.showSingle)(resturantId);
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
            const newFilesArray = filesArray.filter((image) => image.id !== "Images/" + id);
            // Update the restaurant's files array with the filtered array
            verifyRestaurant.files = newFilesArray;
            // Save the updated restaurant
            verifyRestaurant.save();
            // Return a success message
            return res.status(201).json({
                success: true,
                message: "Image deleted successfully",
            });
        }
        else {
            // If the HTTP method is not DELETE, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`
            });
        }
    }
    catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).json({
            success: false,
            message: error
        });
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=deleteImage.resturant.controller.js.map