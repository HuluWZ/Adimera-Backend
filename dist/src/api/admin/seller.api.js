"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_seller_controller_1 = require("../../controller/seller/index.seller.controller");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", index_seller_controller_1.create);
router.get("/get", index_seller_controller_1.getAllSeller);
router.get("/get/:id", index_seller_controller_1.getSeller);
router.put("/update/:id", index_seller_controller_1.update);
router.delete("/delete/:id", index_seller_controller_1.remove);
// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);
exports.default = router;
//# sourceMappingURL=seller.api.js.map