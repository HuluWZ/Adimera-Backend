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
exports.create = void 0;
// Importing the product model to the controller
const news_model_1 = __importDefault(require("../../model/news.model"));
const help_1 = require("../../utils/db_functions/help");
const admin_db_1 = require("../../utils/db_functions/admin.db");
// This is the controller function to create a new news item
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the data sent from req.body
    const { title, description, type, body } = req.body;
    const { userId } = req.userData;
    try {
        // Check if the HTTP method is POST
        if (req.method === "POST") {
            // Check if there are files in the request
            if (req.files) {
                const files = req.files;
                // Use the Mloop function to process the files and get their URLs
                const urls = yield (0, help_1.Mloop)(files);
                // Get user information by user ID
                const user = yield (0, admin_db_1.showUsersbyId)(userId);
                // Create a new news item with the provided data
                const news = yield new news_model_1.default({
                    title: title,
                    description: description,
                    body: body,
                    type: type,
                    files: urls,
                    author: user.firstName
                });
                // Save the news item to the database
                news.save();
                return res.status(201).json({
                    success: true,
                    message: "News created successfully",
                    news,
                });
            }
            else {
                // If there are no files in the request
                const user = yield (0, admin_db_1.showUsersbyId)(userId);
                // Create a new news item without files
                const news = yield new news_model_1.default({
                    title: title,
                    description: description,
                    body: body,
                    type: type,
                    author: user.firstName
                });
                // Save the news item to the database
                news.save();
                return res.status(201).json({
                    success: true,
                    message: "News created successfully",
                    news,
                });
            }
        }
        else {
            // If the HTTP method is not POST, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.create = create;
//# sourceMappingURL=create.news.controller.js.map