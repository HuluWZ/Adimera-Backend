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
//Importing the job model to the controller
const product_model_1 = __importDefault(require("../../model/product.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { name, description, code, price, category, color, size, quantity, totalRate } = req.body;
    const { userId } = req.userData;
    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                const urls = yield (0, help_1.Mloop)(files);
                const imageUrl = [];
                urls.map((item) => imageUrl.push(item.url));
                const product = yield new product_model_1.default({
                    name,
                    description,
                    image: imageUrl,
                    uploadedBy: userId,
                    category,
                    code,
                    price,
                    color,
                    size,
                    quantity,
                    totalRate
                });
                product.save();
                return res.status(201).json({
                    success: true,
                    message: "category created sucessfully",
                    product,
                });
            }
            else {
                const product = yield new product_model_1.default({
                    name,
                    description,
                    image: [],
                    uploadedBy: userId,
                    category,
                    code,
                    price,
                    color,
                    size,
                    quantity,
                    totalRate
                });
                product.save();
                return res.status(201).json({
                    success: true,
                    message: "category created sucessfully",
                    product,
                });
            }
        }
        else {
            return res.status(405).json({
                success: false,
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
//# sourceMappingURL=create.product.controller.js.map