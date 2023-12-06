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
exports.getAll = void 0;
const product_model_1 = __importDefault(require("../../model/product.model"));
const category_model_1 = __importDefault(require("../../model/category.model"));
const user_model_1 = __importDefault(require("../../model/user.model"));
const seller_model_1 = __importDefault(require("../../model/seller.model"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.find();
            const category = yield category_model_1.default.find();
            const user = yield user_model_1.default.find();
            const seller = yield seller_model_1.default.find();
            return {
                product: product.length,
                category: category.length,
                user: user.length,
                seller: seller.length
            };
        }
        catch (error) {
            console.error("Error retrieving folders:", error);
            throw error;
        }
    });
}
exports.getAll = getAll;
//# sourceMappingURL=report.db.js.map