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
exports.deactivate = void 0;
//Importing the bcrypt package
// Importing usermodel from user
const user_model_1 = __importDefault(require("../../../model/user.model"));
const deactivate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the password from the request body
    const { id } = req.params;
    // Get the user ID from the user data
    // Try to change the user's password
    try {
        // Check if the request method is POST
        if (req.method !== "POST") {
            return res.status(405).json({
                message: "method not allowed",
                success: false
            });
        }
        // Find the user with the specified ID
        const verifyUser = yield user_model_1.default.findOne({ _id: id });
        // If the user is not found, return a 401 Unauthorized response
        if (!verifyUser) {
            return res.status(401).json({
                message: "user not found",
            });
        }
        // Hash the password using bcrypt
        verifyUser.status = "DEACTIVATED";
        verifyUser.save();
        return res.status(201).json({
            message: "user deactivated",
            success: true
        });
    }
    catch (error) {
        // If an error occurs, return a 412 Precondition Failed response to the client
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.deactivate = deactivate;
//# sourceMappingURL=dectavite.auth.controller.js.map