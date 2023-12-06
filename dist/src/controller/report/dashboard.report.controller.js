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
exports.dashboardReport = void 0;
const report_db_1 = require("../../utils/db_functions/report.db");
const dashboardReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield (0, report_db_1.getAll)();
    res.status(200).json({ report: items, success: true });
});
exports.dashboardReport = dashboardReport;
//# sourceMappingURL=dashboard.report.controller.js.map