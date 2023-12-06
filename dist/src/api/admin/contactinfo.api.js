"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_contact_controller_1 = require("../../controller/contact/index.contact.controller");
const authJWT_1 = require("../../middleware/authJWT");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, index_contact_controller_1.create);
router.get("/get", index_contact_controller_1.getContactInfos);
router.get("/show/:id", authJWT_1.AdminauthJWT, index_contact_controller_1.getContactInfo);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_contact_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_contact_controller_1.deleteInfo);
exports.default = router;
//# sourceMappingURL=contactinfo.api.js.map