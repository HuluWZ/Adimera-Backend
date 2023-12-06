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
//Importing the product model to the controller
const portfolio_model_1 = __importDefault(require("../../model/portfolio.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { title, description, links, body } = req.body;
    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                const urls = yield (0, help_1.Mloop)(files);
                //creating the resturant
                const portfolio = yield new portfolio_model_1.default({
                    title: title,
                    description: description,
                    body: body,
                    links: links,
                    files: urls,
                });
                portfolio.save();
                return res.status(201).json({
                    success: true,
                    message: "portfolio created sucessfully",
                });
            }
            else {
                //creating the resturant
                const portfolio = yield new portfolio_model_1.default({
                    title: title,
                    description: description,
                    body: body,
                });
                portfolio.save();
                return res.status(201).json({
                    success: true,
                    message: "portfolio created sucessfully",
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
//# sourceMappingURL=create.portfolio.controller.js.map