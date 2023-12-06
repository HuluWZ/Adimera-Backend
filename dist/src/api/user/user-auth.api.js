"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_auth_controller_1 = require("../../controller/auth/User/index.auth.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
// Create an Express router
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", index_auth_controller_1.register);
router.get("/get", index_auth_controller_1.getUsers);
router.get("/show/:id", authJWT_1.AdminauthJWT, index_auth_controller_1.getuser);
router.get("/profile", authJWT_1.UserAuthJWT, index_auth_controller_1.MyProfile);
router.post("/login", index_auth_controller_1.login);
router.post("/change", authJWT_1.UserAuthJWT, index_auth_controller_1.changePassword);
router.post("/reset/:id", authJWT_1.UserAuthJWT, index_auth_controller_1.resetPassword);
router.post("/add-image", authJWT_1.UserAuthJWT, mutler_1.upload.array("files", 10), index_auth_controller_1.addImage);
router.post("/deactivate/:id", authJWT_1.AdminauthJWT, index_auth_controller_1.deactivate);
router.delete("/delete/:id", index_auth_controller_1.remove);
exports.default = router;
//# sourceMappingURL=user-auth.api.js.map