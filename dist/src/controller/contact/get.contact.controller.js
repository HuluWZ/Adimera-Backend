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
exports.getContact = exports.getContacts = void 0;
const contact_db_1 = require("../../utils/db_functions/contact.db");
const getContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, contact_db_1.getAll)();
    res.status(200).send(contacts);
});
exports.getContacts = getContacts;
const getContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contact = yield (0, contact_db_1.showSingle)(id);
    res.status(200).send(contact);
});
exports.getContact = getContact;
//# sourceMappingURL=get.contact.controller.js.map