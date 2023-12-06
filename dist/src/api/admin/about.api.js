"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_about_controller_1 = require("../../controller/about/index.about.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
// Create an Express router
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_about_controller_1.create);
router.get("/get", index_about_controller_1.getAbouts);
router.get("/show/:id", index_about_controller_1.getAbout);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_about_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_about_controller_1.deleteAbout);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_about_controller_1.addImage);
router.delete("/delete-image/:aboutId/:id", authJWT_1.AdminauthJWT, index_about_controller_1.deleteImage);
exports.default = router;
//# sourceMappingURL=about.api.js.map