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
const about_db_1 = require("../../utils/db_functions/about.db"); // Import the showSingle function from the about.db module in the db_functions directory.
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the aboutId and id parameters from the request.
    const { aboutId, id } = req.params;
    try { // Wrap the code in a try-catch block to handle any errors.
        if (req.method === "DELETE") { // Check if the request method is DELETE.
            // Use the showSingle function to get the about record with the specified ID.
            const verifyabout = yield (0, about_db_1.showSingle)(aboutId);
            // If the about record is not found, return a 404 Not Found response to the client.
            if (!verifyabout) {
                return res.status(404).json({
                    message: "about not found",
                    status: false,
                });
            }
            // Get the array of images from the about record.
            const filesarray = verifyabout.files;
            // Filter the array of images to remove the image with the specified ID.
            const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);
            // Set the `files` property of the about record to the new array of images.
            verifyabout.files = newfilesarray;
            // Save the about record to the database.
            verifyabout.save();
            // Return a success response to the client.
            return res.status(201).json({
                success: true,
                message: "image deleted sucessfully",
            });
        }
        else { // If the request method is not DELETE, return a 405 Method Not Allowed response to the client.
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) { // Catch any errors and return a 412 Precondition Failed response to the client.
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=deleteImage.about.controller.js.map