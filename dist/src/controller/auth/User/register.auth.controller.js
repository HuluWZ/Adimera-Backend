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
exports.register = void 0;
//Importing the express-async-handler package
//Importing the bcrypt package
const bcrypt_1 = __importDefault(require("bcrypt"));
//Importing the user model
const user_model_1 = __importDefault(require("../../../model/user.model"));
const user_db_1 = require("../../../utils/db_functions/user.db");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the inputs from req.body
    const { firstName, lastName, email, password, phone } = req.body;
    // Verify that the email address is not already in use
    const verifyUser = yield (0, user_db_1.showUsersbyEmail)(email);
    // If the email address is already in use, return a 403 Forbidden response
    if (verifyUser) {
        return res.status(403).json({
            message: "email already registered",
        });
    }
    // Hash the password using bcrypt
    bcrypt_1.default.hash(password, 10).then((hash) => {
        // Create a new user object with the hashed password
        const user = new user_model_1.default({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hash,
            phone: phone,
            passCode: password
        });
        // Save the new user to the database
        user.save().then((response) => {
            // Return a success response with the user's data
            return res.status(201).json({
                message: "user successfully registerd!",
                response,
                success: true,
            });
        }).catch((error) => {
            // If an error occurs, return a 500 Internal Server Error response
            res.status(500).json({
                error: error,
            });
        });
    });
});
exports.register = register;
//# sourceMappingURL=register.auth.controller.js.map