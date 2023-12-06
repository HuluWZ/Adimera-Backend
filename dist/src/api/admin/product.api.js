"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_product_controller_1 = require("../../controller/product/index.product.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_product_controller_1.create);
router.get("/get", index_product_controller_1.getAllProduct);
router.get("/get/:id", index_product_controller_1.getProduct);
router.put("/update/:id", mutler_1.upload.any(), index_product_controller_1.update);
router.delete("/delete/:id", index_product_controller_1.remove);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);
// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);
exports.default = router;
//# sourceMappingURL=product.api.js.map