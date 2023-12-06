"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_bussiness_controller_1 = require("../../controller/bussiness/index.bussiness.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_bussiness_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_bussiness_controller_1.addImage);
router.delete("/delete-image/:businessId/:id", authJWT_1.AdminauthJWT, index_bussiness_controller_1.deleteImage);
router.post("/rate-bussiness/:id", index_bussiness_controller_1.rateBusiness);
router.get("/get", index_bussiness_controller_1.getbusinesss);
router.get("/show/:id", index_bussiness_controller_1.showbusinesss);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_bussiness_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_bussiness_controller_1.deletebusiness);
exports.default = router;
//# sourceMappingURL=bussiness.api.js.map