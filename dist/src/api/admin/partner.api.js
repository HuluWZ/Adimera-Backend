"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_partner_controller_1 = require("../../controller/partner/index.partner.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_partner_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_partner_controller_1.addImage);
router.get("/get", index_partner_controller_1.getItems);
router.get("/show/:id", index_partner_controller_1.getItem);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_partner_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_partner_controller_1.deleteItem);
router.delete("/delete-image/:partnerId/:id", authJWT_1.AdminauthJWT, index_partner_controller_1.deleteImage);
exports.default = router;
//# sourceMappingURL=partner.api.js.map