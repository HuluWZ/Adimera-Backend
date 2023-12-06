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
exports.getad = exports.getads = void 0;
const ad_db_1 = require("../../utils/db_functions/ad.db");
const getads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all ad records from the database
    const folders = yield (0, ad_db_1.getAll)();
    // Send a success response to the client with the ad records
    res.status(200).send(folders);
});
exports.getads = getads;
const getad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the ID of the ad to be retrieved from the request params
    const { id } = req.params;
    // Get the ad record with the specified ID from the database
    const folder = yield (0, ad_db_1.showSingle)(id);
    // Send a success response to the client with the ad record
    res.status(200).send(folder);
});
exports.getad = getad;
//# sourceMappingURL=get.ad.controller.js.map