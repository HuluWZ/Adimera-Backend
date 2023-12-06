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
exports.update = void 0;
// Importing the restaurant model to the controller
const resturant_model_1 = __importDefault(require("../../model/resturant.model"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.body
    const { name, description, location, type, rating } = req.body;
    // Destructure the 'id' from req.params
    const { id } = req.params;
    // Create an object with the update data
    const updateData = {
        name: name,
        description: description,
        location: location,
        rating: rating,
        type: type,
    };
    // Find the restaurant by its ID
    const restaurants = yield resturant_model_1.default.findOne({ _id: id });
    // Check if the HTTP method is not PUT
    if (req.method !== "PUT") {
        return res.status(405).json({
            err: `${req.method} method not allowed`,
        });
    }
    try {
        if (!restaurants) {
            return res.status(400).json({
                success: false,
                message: "Restaurant not found",
            });
        }
        // Update the restaurant data with the provided updateData
        restaurants.updateOne(updateData, { useFindAndModify: false }).then((data) => {
            if (!data) {
                // If the update operation fails, send a 404 Not Found response
                res.status(404).send({
                    message: `Cannot update restaurant with id=${id}. Maybe the restaurant was not found!`,
                });
            }
            else {
                // Send a success message if the update is successful
                return res
                    .status(201)
                    .json({ message: "Restaurant updated successfully." });
            }
        });
    }
    catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.resturant.controller.js.map