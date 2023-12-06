"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_auth_controller_1 = require("../../controller/auth/Admin/index.auth.controller");
const authJWT_1 = require("../../middleware/authJWT");
// Create an Express router
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", index_auth_controller_1.register);
router.get("/get", authJWT_1.AdminauthJWT, index_auth_controller_1.getUsers);
router.get("/show/:id", authJWT_1.AdminauthJWT, index_auth_controller_1.getuser);
router.post("/login", index_auth_controller_1.login);
router.post("/change", authJWT_1.AdminauthJWT, index_auth_controller_1.changePassword);
router.post("/reset/:id", authJWT_1.AdminauthJWT, index_auth_controller_1.resetPassword);
// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);
exports.default = router;
//# sourceMappingURL=admin-auth.api.js.map