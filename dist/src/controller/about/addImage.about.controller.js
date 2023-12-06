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
exports.addImage = void 0;
const help_1 = require("../../utils/db_functions/help");
const about_model_1 = __importDefault(require("../../model/about.model"));
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { id } = req.params;
    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                const urls = yield (0, help_1.loop)(files);
                //we use uuidv4 to generate a random and unique id for the abouts
                const verifyabout = yield about_model_1.default.findOne({ _id: id });
                if (!verifyabout) {
                    return res.status(404).json({
                        message: "about not found",
                        status: false,
                    });
                }
                const filesarray = verifyabout.files;
                filesarray.push(urls);
                verifyabout.save();
                return res.status(201).json({
                    success: true,
                    message: "image added sucessfully",
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
exports.addImage = addImage;
//# sourceMappingURL=addImage.about.controller.js.map