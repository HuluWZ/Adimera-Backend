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
// Importing the product model to the controller
const about_model_1 = __importDefault(require("../../model/about.model"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the title and description from the request body
    const { title, description } = req.body;
    // Get the ID from the request params
    const { id } = req.params;
    // Create an object with the update data
    const updateData = {
        title,
        description,
    };
    // Find the about record with the specified ID
    const about = yield about_model_1.default.findOne({ _id: id });
    // Check if the request method is PUT
    if (req.method !== "PUT") {
        // If the request method is not PUT, return a 405 Method Not Allowed response
        return res.status(405).json({
            err: `${req.method} method not allowed`,
        });
    }
    // Try to update the about record
    try {
        // If the about record is not found, return a 400 Bad Request response
        if (!about) {
            return res.status(400).json({
                success: false,
                message: "about not found",
            });
        }
        // Update the about record with the update data
        about.updateOne(updateData, { useFindAndModify: false }).then((data) => {
            // If the update was successful, return a 201 Created response
            if (data) {
                return res.status(201).json({ message: "about updated successfully." });
            }
            else {
                // If the update was not successful, return a 404 Not Found response
                res.status(404).send({
                    message: `Cannot update about with id=${id}. Maybe about was not found!`,
                });
            }
        });
    }
    catch (error) {
        // If an error occurs, return a 412 Precondition Failed response
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.about.controller.js.map