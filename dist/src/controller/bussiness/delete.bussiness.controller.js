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
exports.deletebusiness = void 0;
const bussiness_model_1 = __importDefault(require("../../model/bussiness.model"));
const deletebusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the id from the request parameters
    const { id } = req.params;
    // Try to delete the business
    try {
        // Fetch the business with the specified ID
        const business = yield bussiness_model_1.default.findOne({ _id: id });
        // If the business is not found, return a 404 Not Found response
        if (!business) {
            return res.status(404).json({
                success: false,
                message: "business not found",
            });
        }
        // Delete the business from the database
        yield bussiness_model_1.default.deleteOne({ _id: id });
        // Return a success response
        return res.status(200).json({
            success: true,
            message: "business deleted sucessfully",
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
exports.deletebusiness = deletebusiness;
//# sourceMappingURL=delete.bussiness.controller.js.map