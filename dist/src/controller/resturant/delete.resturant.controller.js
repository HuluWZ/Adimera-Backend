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
exports.deleterestaurant = void 0;
// Importing the restaurant model to the controller
const resturant_model_1 = __importDefault(require("../../model/resturant.model"));
// This is a controller function for deleting a single restaurant
const deleterestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the 'id' from req.params
    const { id } = req.params;
    try {
        // Delete a single restaurant using the 'id' from req.params in the database
        yield resturant_model_1.default.deleteOne({ _id: id });
        // Since there is no data to be responded, simply send a success message
        return res.status(200).json({
            success: true,
            message: "Restaurant deleted successfully",
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
exports.deleterestaurant = deleterestaurant;
//# sourceMappingURL=delete.resturant.controller.js.map