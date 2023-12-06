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
exports.deleteHero = void 0;
const hero_model_1 = __importDefault(require("../../model/hero.model"));
// import  user from "../../model/user"
const deleteHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const removed = yield hero_model_1.default.findByIdAndDelete(id);
        if (!removed)
            throw Error("Something went wrong ");
        res
            .status(200)
            .json({ message: "hero deleted successfully", success: true });
    }
    catch (error) {
        res.status(500).json({ message: "server error", success: false });
    }
});
exports.deleteHero = deleteHero;
//# sourceMappingURL=delete.hero.controller.js.map