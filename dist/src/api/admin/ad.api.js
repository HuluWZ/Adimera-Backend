"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_ad_controller_1 = require("../../controller/ad/index.ad.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_ad_controller_1.addImage);
router.delete("/delete-image/:heroId/:id", authJWT_1.AdminauthJWT, index_ad_controller_1.deleteImage);
router.post("/create", mutler_1.upload.array("files", 10), index_ad_controller_1.create);
router.get("/get", index_ad_controller_1.getads);
router.get("/show/:id", index_ad_controller_1.getad);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_ad_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_ad_controller_1.deletead);
exports.default = router;
//# sourceMappingURL=ad.api.js.map