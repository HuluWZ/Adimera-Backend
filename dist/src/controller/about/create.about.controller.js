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
// Importing the about model to the controller
const about_model_1 = __importDefault(require("../../model/about.model"));
const help_1 = require("../../utils/db_functions/help");
// function to create an about
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    const { title, description } = req.body;
    // checking the req.method
    try {
        if (req.method === "POST") {
            // checking if there is an image attached with the request
            if (req.files) {
                const files = req.files;
                // looping the image array
                const urls = yield (0, help_1.loop)(files);
                // creating an about model
                const about = yield new about_model_1.default({
                    title: title,
                    description: description,
                    files: urls,
                });
                // saving about model
                about.save();
                // return sucess message
                return res.status(201).json({
                    success: true,
                    message: "about created sucessfully",
                    data: about,
                });
            }
            else {
                // if the request doesnot have an image
                const about = yield new about_model_1.default({
                    title: title,
                    description: description,
                });
                about.save();
                return res.status(201).json({
                    success: true,
                    message: "about created sucessfully",
                    data: about,
                });
            }
        }
        else {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.create = create;
//# sourceMappingURL=create.about.controller.js.map