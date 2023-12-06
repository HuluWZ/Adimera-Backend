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
exports.deleteInfo = void 0;
// Importing the ContactInfoModel class from the model/contactInfo.model module.
const contactInfo_model_1 = __importDefault(require("../../model/contactInfo.model"));
// Export the deleteInfo function.
const deleteInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the id from the request parameters.
    const { id } = req.params;
    // Try to find and delete the contact info with the specified id.
    try {
        const removed = yield contactInfo_model_1.default.findByIdAndDelete(id);
        // If the contact info was not found or deleted, throw an error.
        if (!removed) {
            throw new Error("Something went wrong");
        }
        // Return a 200 OK response with a success message.
        res.status(200).json({
            message: "Contact info deleted successfully",
            success: true,
        });
    }
    catch (error) {
        // Catch any errors that occur and return a 500 Internal Server Error response.
        res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
});
exports.deleteInfo = deleteInfo;
//# sourceMappingURL=deleteInfo.controller.js.map