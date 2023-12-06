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
//Importing the hero model to the controller
const hero_model_1 = __importDefault(require("../../model/hero.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { title, link } = req.body;
    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                console.log("files", files);
                const urls = yield (0, help_1.loop)(files);
                const hero = yield new hero_model_1.default({
                    title: title,
                    link: link,
                    files: urls,
                });
                hero.save();
                return res.status(201).json({
                    success: true,
                    message: "hero created sucessfully",
                    data: hero,
                });
            }
            else {
                const hero = yield new hero_model_1.default({
                    title: title,
                    link: link,
                });
                hero.save();
                return res.status(201).json({
                    success: true,
                    message: "hero created sucessfully",
                    data: hero,
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
//# sourceMappingURL=create.hero.controller.js.map