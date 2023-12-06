"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_faq_controller_1 = require("../../controller/faq/index.faq.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_faq_controller_1.create);
router.get("/get", index_faq_controller_1.getItems);
router.get("/show/:id", index_faq_controller_1.getItem);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_faq_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_faq_controller_1.deleteItem);
exports.default = router;
//# sourceMappingURL=faq.api.js.map