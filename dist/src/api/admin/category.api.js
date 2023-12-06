"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_category_controller_1 = require("../../controller/category/index.category.controller");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", mutler_1.upload.array("files", 10), index_category_controller_1.create);
router.get("/get", index_category_controller_1.getAllCategory);
router.get("/get/:id", index_category_controller_1.getCategory);
router.put("/update/:id", mutler_1.upload.any(), index_category_controller_1.update);
router.delete("/delete/:id", index_category_controller_1.remove);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);
// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);
exports.default = router;
//# sourceMappingURL=category.api.js.map