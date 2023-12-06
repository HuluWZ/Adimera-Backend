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
exports.update = void 0;
//Importing the job model to the controller
const category_model_1 = __importDefault(require("../../model/category.model"));
const help_1 = require("../../utils/db_functions/help");
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const { id } = req.params;
    const { body } = req;
    try {
        if (req.files.length > 0) {
            const files = req.files;
            const { url } = yield (0, help_1.loop)(files);
            const category = yield category_model_1.default.findByIdAndUpdate(id, Object.assign(Object.assign({}, body), { image: url }));
            return res.status(201).json({
                category,
                success: true,
                message: "category updated sucessfully",
            });
        }
        else {
            const category = yield category_model_1.default.findByIdAndUpdate(id, body);
            console.log(body);
            return res.status(201).json({
                category,
                success: true,
                message: "category updated sucessfully",
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
exports.update = update;
//# sourceMappingURL=update.category.controller.js.map