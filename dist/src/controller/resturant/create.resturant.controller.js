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
// Importing the restaurant model to the controller
const resturant_model_1 = __importDefault(require("../../model/resturant.model"));
const help_1 = require("../../utils/db_functions/help");
// This is a controller function for creating a new restaurant
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.body
    const { name, description, location, type, rating } = req.body;
    try {
        // Check if the HTTP method is POST
        if (req.method === "POST") {
            // Check if there are files in the request
            if (req.files) {
                const files = req.files;
                // Use the 'Mloop' function to process the files and get their URLs
                const urls = yield (0, help_1.Mloop)(files);
                // Create a new restaurant with the provided data and file URLs
                const restaurant = yield new resturant_model_1.default({
                    name: name,
                    description: description,
                    location: location,
                    rating: rating,
                    type: type,
                    files: urls,
                });
                // Save the restaurant to the database
                restaurant.save();
                return res.status(201).json({
                    success: true,
                    message: "Restaurant created successfully",
                    data: restaurant,
                });
            }
            else {
                // If there are no files in the request, create a restaurant without files
                const restaurant = yield new resturant_model_1.default({
                    name: name,
                    description: description,
                    location: location,
                    rating: rating,
                    type: type,
                });
                // Save the restaurant to the database
                restaurant.save();
                return res.status(201).json({
                    success: true,
                    message: "Restaurant created successfully",
                    data: restaurant,
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
exports.create = create;
//# sourceMappingURL=create.resturant.controller.js.map