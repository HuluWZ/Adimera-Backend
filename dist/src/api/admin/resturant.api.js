"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_resturant_controller_1 = require("../../controller/resturant/index.resturant.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_resturant_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_resturant_controller_1.addImage);
router.get("/get", index_resturant_controller_1.getresturants);
router.get("/show/:id", index_resturant_controller_1.getresturant);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_resturant_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_resturant_controller_1.deleterestaurant);
router.delete("/delete-image/:resturantId/:id", authJWT_1.AdminauthJWT, index_resturant_controller_1.deleteImage);
exports.default = router;
//# sourceMappingURL=resturant.api.js.map