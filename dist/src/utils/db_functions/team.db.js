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
exports.showSingle = exports.getAll = void 0;
const team_model_1 = __importDefault(require("../../model/team.model"));
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teams = yield team_model_1.default.find();
            return teams;
        }
        catch (error) {
            // Handle error
            console.error("Error retrieving folders:", error);
            throw error;
        }
    });
}
exports.getAll = getAll;
function showSingle(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teams = yield team_model_1.default.findById(id);
            return teams;
        }
        catch (error) {
            // Handle error
            console.error("Error retrieving MenuType:", error);
            throw error;
        }
    });
}
exports.showSingle = showSingle;
//# sourceMappingURL=team.db.js.map