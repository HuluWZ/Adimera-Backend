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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = exports.getAbouts = void 0;
const about_db_1 = require("../../utils/db_functions/about.db");
const getAbouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all about records from the database
    const folders = yield (0, about_db_1.getAll)();
    // Send the about records to the client with a status code of 200 OK
    res.status(200).send(folders);
});
exports.getAbouts = getAbouts;
const getAbout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the ID of the about record from the request parameters
    const { id } = req.params;
    // Get the about record with the specified ID from the database
    const folder = yield (0, about_db_1.showSingle)(id);
    // Send the about record to the client with a status code of 200 OK
    res.status(200).send(folder);
});
exports.getAbout = getAbout;
//# sourceMappingURL=get.about.controller.js.map