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
exports.login = void 0;
//Importing JWT from Json Web Token package
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Importing the bcrypt package
const bcrypt_1 = __importDefault(require("bcrypt"));
// Importing usermodel from user
// import UserModel from "../../../model/admin.model";
const user_db_1 = require("../../../utils/db_functions/user.db");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the email and password from the request body
    const { email, password } = req.body;
    // Get the user with the specified email from the database
    const getUser = yield (0, user_db_1.showUsersbyEmail)(email);
    // If the user is not found, return a 403 Forbidden response
    if (!getUser || getUser.status === "DEACTIVATE") {
        return res.status(403).json({
            message: "Authentication Failed",
        });
    }
    // Compare the password from the request with the user's password
    bcrypt_1.default.compare(password, getUser.password).then((response) => {
        // If the passwords do not match, return a 401 Unauthorized response
        if (!response) {
            return res.status(401).json({
                message: "Authentication Failed",
            });
        }
        else {
            // Generate a JWT token with the user's ID and email
            const jwtToken = jsonwebtoken_1.default.sign({
                userId: getUser._id,
                email: email,
            }, 
            // Sign the token with the JWTU_SECRET environment variable
            process.env.JWTU_SECRET, {
                expiresIn: "24h",
            });
            // Return a success response with the JWT token and the user's ID
            return res.status(200).json({
                accessToken: jwtToken,
                userId: getUser._id,
            });
        }
    }).catch((err) => {
        // If an error occurs, return a 401 Unauthorized response
        return res.status(401).json({
            messgae: err.message,
            success: false,
        });
    });
});
exports.login = login;
//# sourceMappingURL=login.auth.controller.js.map