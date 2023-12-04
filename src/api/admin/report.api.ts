import express from "express";
import {
    dashboardReport,
} from "../../controller/report/index.report.controller";

const router = express.Router();

router.get("/dashboard", dashboardReport);

export default router;
