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
exports.showbusinesss = exports.getbusinesss = void 0;
const business_db_1 = require("../../utils/db_functions/business.db");
//Get all businesss async function
const getbusinesss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetching all businesss from the database and assigning it to businesss
    const businesss = yield (0, business_db_1.getAll)();
    // Responding the data to any request made
    return res.status(200).json(businesss.reverse());
    // I use .reverse() function to get the latest datas at first
});
exports.getbusinesss = getbusinesss;
//Get Single business
const showbusinesss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructing id from req.params
    const { id } = req.params;
    // Fetching single business using the id in the req.params from the database and assigning it to business
    const business = yield (0, business_db_1.showSingle)(id);
    try {
        if (business) {
            // Responding the data to any request made
            return res.status(200).json(business);
        }
    }
    catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.showbusinesss = showbusinesss;
//# sourceMappingURL=get.bussiness.controller.js.map