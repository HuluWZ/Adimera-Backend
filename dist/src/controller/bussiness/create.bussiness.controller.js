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
exports.create = void 0;
//Importing the product model to the controller
const bussiness_model_1 = __importDefault(require("../../model/bussiness.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.body
    const { name, description, link, rating, location, email, type, phoneNumber, subType } = req.body;
    // Try to create the business
    try {
        // Check if the request method is POST
        if (req.method === "POST") {
            // Check if there are any files in the request
            if (req.files) {
                // Get the files from the request
                const files = req.files;
                // Use the Mloop function to upload the files to the cloud and get their URLs
                const urls = yield (0, help_1.Mloop)(files);
                // Create a new business object with the data from the request body and the uploaded file URLs
                const business = yield new bussiness_model_1.default({
                    name: name,
                    description: description,
                    link: link,
                    files: urls,
                    location: location,
                    phoneNumber: phoneNumber,
                    rating: rating,
                    email: email,
                    type: type,
                    subType: subType
                });
                // Save the new business to the database
                business.save();
                // Return a success response with the new business data
                return res.status(201).json({
                    success: true,
                    message: "business created sucessfully",
                    business
                });
            }
            else {
                // If there are no files in the request, create a new business object with the data from the request body
                const business = yield new bussiness_model_1.default({
                    name: name,
                    description: description,
                    link: link,
                    location: location,
                    phoneNumber: phoneNumber,
                    rating: rating,
                    email: email,
                    type: type,
                    subType: subType
                });
                // Save the new business to the database
                business.save();
                // Return a success response with the new business data
                return res.status(201).json({
                    success: true,
                    message: "business created sucessfully",
                    business
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
exports.create = create;
//# sourceMappingURL=create.bussiness.controller.js.map