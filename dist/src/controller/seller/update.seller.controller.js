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
const seller_model_1 = __importDefault(require("../../model/seller.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, phone, address } = req.body;
    const { id } = req.params;
    try {
        let updateData = {};
        if (password != undefined) {
            const hashed = yield bcrypt_1.default.hash(password, 10);
            updateData = {
                firstName,
                lastName,
                email,
                password: hashed,
                phone,
                address
            };
        }
        else {
            updateData = {
                firstName,
                lastName,
                email,
                phone,
                address
            };
        }
        const seller = yield seller_model_1.default.findByIdAndUpdate(id, updateData);
        return res.status(201).json({
            success: true,
            message: "Seller updated sucessfully",
            seller,
        });
    }
    catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.seller.controller.js.map