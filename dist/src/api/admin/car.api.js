"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_car_controller_1 = require("../../controller/car/index.car.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_car_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_car_controller_1.addImage);
router.delete("/delete-image/:carId/:id", authJWT_1.AdminauthJWT, index_car_controller_1.deleteImage);
router.get("/get", index_car_controller_1.getCars);
router.get("/show/:id", index_car_controller_1.showCar);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_car_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_car_controller_1.deleteCar);
exports.default = router;
//# sourceMappingURL=car.api.js.map