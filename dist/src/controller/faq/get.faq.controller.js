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
exports.getItem = exports.getItems = void 0;
const faq_db_1 = require("../../utils/db_functions/faq.db");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Items = yield (0, faq_db_1.getAll)();
    res.status(200).send(Items);
});
exports.getItems = getItems;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Item = yield (0, faq_db_1.showSingle)(id);
    res.status(200).send(Item);
});
exports.getItem = getItem;
//# sourceMappingURL=get.faq.controller.js.map