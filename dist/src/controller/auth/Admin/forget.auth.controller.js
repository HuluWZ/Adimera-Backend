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
exports.resetPassword = void 0;
//Importing the bcrypt package
const bcrypt_1 = __importDefault(require("bcrypt"));
// Importing usermodel from user
const admin_model_1 = __importDefault(require("../../../model/admin.model"));
// import { IncomingMessage, UserDataType } from "../../../middleware/authJWT";
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the user ID from the request params
    const { id } = req.params;
    // Check if the request method is POST
    try {
        if (req.method === "POST") {
            // Find the user with the specified ID
            const verifyUser = yield admin_model_1.default.findOne({ _id: id });
            // If the user is not found, return a 401 Unauthorized response
            if (!verifyUser) {
                return res.status(401).json({
                    message: "user not found",
                });
            }
            // Generate a default password
            const password = "060708";
            // Hash the password using bcrypt
            bcrypt_1.default.hash(password, 10).then((hash) => __awaiter(void 0, void 0, void 0, function* () {
                // Set the user's password to the hashed password
                verifyUser.password = hash;
                // Set the user's firstTimeLogin flag to true
                // verifyUser.firstTimeLogin = true;
                // Save the user changes
                yield verifyUser.save();
                // Return a success response to the client
                return res.status(201).json({
                    message: "Password reseted successfully",
                    success: true,
                });
            }));
        }
    }
    catch (error) {
        // If an error occurs, return a 412 Precondition Failed response to the client
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=forget.auth.controller.js.map