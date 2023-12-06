"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_report_controller_1 = require("../../controller/report/index.report.controller");
const router = express_1.default.Router();
router.get("/dashboard", index_report_controller_1.dashboardReport);
exports.default = router;
//# sourceMappingURL=report.api.js.map