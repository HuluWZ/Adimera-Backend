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
exports.Mloop = exports.loop = void 0;
/* eslint-disable no-const-assign */
const cloudinary_1 = require("../../config/cloudinary");
const fs_1 = __importDefault(require("fs"));
function loop(Ifiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploader = (path) => __awaiter(this, void 0, void 0, function* () { return yield (0, cloudinary_1.uploads)(path, "Images"); });
        try {
            let urls;
            const { path } = Ifiles[0];
            const newPath = yield uploader(path);
            urls = newPath;
            // fs.unlinkSync(path);
            return urls;
        }
        catch (error) {
            // Handle error
            console.error("Error retrieving folders:", error);
            throw error;
        }
    });
}
exports.loop = loop;
function Mloop(Ifiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploader = (path) => __awaiter(this, void 0, void 0, function* () { return yield (0, cloudinary_1.uploads)(path, "Images"); });
        try {
            const urls = [];
            for (const file of Ifiles) {
                const { path } = file;
                const newPath = yield uploader(path);
                urls.push(newPath);
                // fs.unlinkSync(path)
            }
            return urls;
        }
        catch (error) {
            // Handle error
            console.error("Error retrieving folders:", error);
            throw error;
        }
    });
}
exports.Mloop = Mloop;
//# sourceMappingURL=help.js.map