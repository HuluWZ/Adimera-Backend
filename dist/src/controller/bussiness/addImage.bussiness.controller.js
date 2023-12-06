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
//Imporing file system library
const help_1 = require("../../utils/db_functions/help");
const bussiness_model_1 = __importDefault(require("../../model/bussiness.model"));
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the ID from the request parameters
    const { id } = req.params;
    // Try to add the image to the business
    try {
        // Check if the request method is POST
        if (req.method === "POST") {
            // Check if there are any files in the request
            if (req.files) {
                // Get the files from the request
                const files = req.files;
                // Use the loop function to upload the files to the cloud and get their URLs
                const urls = yield (0, help_1.loop)(files);
                // Find the business with the specified ID
                const verifyItem = yield bussiness_model_1.default.findOne({ _id: id });
                // If the business is not found, return a 404 Not Found response
                if (!verifyItem) {
                    return res.status(404).json({
                        message: "business not found",
                        status: false,
                    });
                }
                // Add the image URLs to the business's files array
                const filesarray = verifyItem.files;
                filesarray.push(urls);
                // Save the business changes
                verifyItem.save();
                // Return a success response
                return res.status(201).json({
                    success: true,
                    message: "image added sucessfully",
                });
            }
        }
        else {
            // If the request method is not POST, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        // If an error occurs, return a 412 Precondition Failed response
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.addImage = addImage;
//# sourceMappingURL=addImage.bussiness.controller.js.map