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
exports.deleteportfolio = void 0;
//Importing the resturant model to the controller
const portfolio_model_1 = __importDefault(require("../../model/portfolio.model"));
//Delete a single resturant
const deleteportfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destructing id from req.params
    const { id } = req.params;
    try {
        //Fetching single resturant using the id in the req.params from the database and assigning it to resturant
        yield portfolio_model_1.default.deleteOne({ _id: id });
        //Since there is no data to be responde we simple send a message
        return res.status(200).json({
            success: true,
            message: "portfolio deleted sucessfully",
        });
    }
    catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.deleteportfolio = deleteportfolio;
//# sourceMappingURL=delete.portfolio.controller.js.map