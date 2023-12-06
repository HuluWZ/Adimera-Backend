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
exports.showUsersbyEmail = exports.showUsersbyId = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../../model/user.model"));
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.find().sort({ _id: -1 });
    });
}
exports.getAllUsers = getAllUsers;
function showUsersbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ _id: id });
    });
}
exports.showUsersbyId = showUsersbyId;
function showUsersbyEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ email: email });
    });
}
exports.showUsersbyEmail = showUsersbyEmail;
//# sourceMappingURL=user.db.js.map