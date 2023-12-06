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
const news_db_1 = require("../../utils/db_functions/news.db");
// This is a controller function for deleting an image associated with a news item
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.params
    const { newsId, id } = req.params;
    try {
        // Check if the HTTP method is DELETE
        if (req.method === 'DELETE') {
            // Use the showSingle function to verify and retrieve the news item
            const verifyItem = yield (0, news_db_1.showSingle)(newsId);
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
            const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);
            // Update the news item's files array with the filtered array
            verifyItem.files = newfilesarray;
            // Save the updated news item
            verifyItem.save();
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
//# sourceMappingURL=deleteImage.news.controller.js.map