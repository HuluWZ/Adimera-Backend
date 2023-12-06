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
exports.getContactInfo = exports.getContactInfos = void 0;
const contactInfo_db_1 = require("../../utils/db_functions/contactInfo.db");
const getContactInfos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, contactInfo_db_1.getAll)();
    res.status(200).send(contacts);
});
exports.getContactInfos = getContactInfos;
const getContactInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contact = yield (0, contactInfo_db_1.showSingle)(id);
    res.status(200).send(contact);
});
exports.getContactInfo = getContactInfo;
//# sourceMappingURL=getInfo.contact.controller.js.map