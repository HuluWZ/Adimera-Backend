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
exports.deleteAbout = void 0;
// Import the AboutModel class
const about_model_1 = __importDefault(require("../../model/about.model"));
// Export an async function to delete an about record
const deleteAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the `id` parameter from the request
    const { id } = req.params;
    // Try to delete the about record with the specified ID
    try {
        const removed = yield about_model_1.default.findByIdAndDelete(id);
        // If the about record was not deleted successfully, throw an error
        if (!removed)
            throw Error("Something went wrong");
        // Send a success response to the client
        res
            .status(200)
            .json({ message: "About deleted successfully", success: true });
    }
    catch (error) {
        // If an error occurs, send an internal server error response to the client
        res.status(500).json({ message: "Server error", success: false });
    }
});
exports.deleteAbout = deleteAbout;
//# sourceMappingURL=delete.about.controller.js.map