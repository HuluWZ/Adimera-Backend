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
// Importing the Mloop function from the utils/db_functions/help module.
const help_1 = require("../../utils/db_functions/help");
// Importing the NewsModel class from the model/news.model module.
const news_model_1 = __importDefault(require("../../model/news.model"));
// Export the addImage function.
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the id from the request parameters.
    const { id } = req.params;
    // Try to add the image to the news with the specified id.
    try {
        // Check if the request method is POST.
        if (req.method === "POST") {
            // Check if the request has any files.
            if (req.files) {
                // Get the files from the request.
                const files = req.files;
                // Upload the files to the cloud and get the URLs.
                const urls = yield (0, help_1.Mloop)(files);
                // Get the news with the specified id.
                const verifyItem = yield news_model_1.default.findOne({ _id: id });
                // Check if the news was found.
                if (!verifyItem) {
                    // Return a 404 Not Found response if the news was not found.
                    return res.status(404).json({
                        message: "news not found",
                        status: false,
                    });
                }
                // Get the files array from the news.
                const filesarray = verifyItem.files;
                // Add the new image URL to the files array.
                filesarray.push(urls[0]);
                // Save the news.
                verifyItem.save();
                // Return a 201 Created response with a success message.
                return res.status(201).json({
                    success: true,
                    message: "image added sucessfully",
                });
            }
            else {
                // Return a 400 Bad Request response if the request does not have any files.
                return res.status(400).json({
                    message: "no files uploaded",
                    success: false,
                });
            }
        }
        else {
            // Return a 405 Method Not Allowed response if the request method is not POST.
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        // Catch any errors that occur and return a 412 Precondition Failed response.
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.addImage = addImage;
//# sourceMappingURL=addImage.news.controller.js.map