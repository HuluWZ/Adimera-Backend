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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImage = void 0;
// Importing the restaurant model to the controller
const resturant_model_1 = __importDefault(require("../../model/resturant.model"));
// Importing the file system library
const help_1 = require("../../utils/db_functions/help");
// This is a controller function for adding an image to a restaurant
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.params
    const { id } = req.params;
    try {
        // Check if the HTTP method is POST
        if (req.method === "POST") {
            // Check if there are files in the request
            if (req.files) {
                const files = req.files;
                // Use the 'loop' function to process the files and get their URLs
                const urls = yield (0, help_1.loop)(files);
                // Use the provided ID to find the restaurant in the database
                const verifyRestaurant = yield resturant_model_1.default.findOne({ _id: id });
                if (!verifyRestaurant) {
                    // If the restaurant is not found, return a 404 Not Found response
                    return res.status(404).json({
                        message: "Restaurant not found",
                        status: false,
                    });
                }
                // Get the existing array of files associated with the restaurant
                const filesArray = verifyRestaurant.files;
                // Push the newly obtained URLs into the array
                filesArray.push(urls);
                // Save the restaurant with the updated files array
                verifyRestaurant.save();
                // Return a success message
                return res.status(201).json({
                    success: true,
                    message: "Image added successfully",
                });
            }
        }
        else {
            // If the HTTP method is not POST, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.addImage = addImage;
//# sourceMappingURL=addImage.resturant.controller.js.map