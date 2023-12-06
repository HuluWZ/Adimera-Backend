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
const bussiness_model_1 = __importDefault(require("../../model/bussiness.model"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    const { name, description, link, rating, location, email, type, phoneNumber, subType } = req.body;
    // Destruct the id from req.params
    const { id } = req.params;
    // Create a new object called updateData and assign it the values of the properties that were destructured from the req.body object
    const updateData = {
        name: name,
        description: description,
        link: link,
        location: location,
        phoneNumber: phoneNumber,
        rating: rating,
        email: email,
        type: type,
        subType: subType
    };
    // Assign the business with the specified id to the variable business
    const business = yield bussiness_model_1.default.findOne({ _id: id });
    // Start a try block to handle any errors that may occur
    try {
        // Check if the req.method is not equal to PUT. If it is not, then return a 405 Method Not Allowed response with an error message
        if (req.method !== "PUT") {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
        // Check if the business variable is not null. If it is, then return a 404 Not Found response with an error message
        if (!business) {
            return res.status(404).json({
                success: false,
                message: "business not found",
            });
        }
        // Update the business with the id and updateData values
        business.updateOne(updateData, { useFindAndModify: false }).then((data) => {
            // Check if the data returned from the updateOne() method is not null. If it is, then return a 404 Not Found response with an error message
            if (!data) {
                res.status(404).send({
                    message: `Cannot update business with id=${id}. Maybe business was not found!`,
                });
            }
            else {
                // Otherwise, return a 201 Created response with a success message
                return res
                    .status(201)
                    .json({ message: "business updated successfully." });
            }
        });
    }
    catch (error) {
        // Catch any errors that occur in the try block and return a 412 Precondition Failed response with an error message
        return res.status(412).send({
            success: false,
            message: error.message
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.bussiness.controller.js.map