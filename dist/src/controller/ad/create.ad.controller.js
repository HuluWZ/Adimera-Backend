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
// Importing the hero model to the controller
const ad_model_1 = __importDefault(require("../../model/ad.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    const { title, link, adType } = req.body;
    // Check if the request method is POST
    try {
        if (req.method !== "POST") {
            // If the request method is not POST, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
        // If there are files attached to the request, then process them
        if (req.files) {
            // Get the files from the request
            const files = req.files;
            // Loop through the files and upload them to the database
            const urls = yield (0, help_1.loop)(files);
            // Create a new ADModel instance with the title, link, and file URLs
            const ad = yield new ad_model_1.default({
                title: title,
                link: link,
                files: urls,
                adType: adType
            });
            // Save the ADModel instance to the database
            ad.save();
            // Return a success response to the client
            return res.status(201).json({
                success: true,
                message: "ad created sucessfully",
                data: ad,
            });
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
exports.create = create;
//# sourceMappingURL=create.ad.controller.js.map