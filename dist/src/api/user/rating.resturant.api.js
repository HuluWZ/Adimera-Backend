"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_resturant_controller_1 = require("../../controller/resturant/index.resturant.controller");
const authJWT_1 = require("../../middleware/authJWT");
const router = express_1.default.Router();
router.post("/rate/:id", authJWT_1.UserAuthJWT, index_resturant_controller_1.rateRestaurant);
exports.default = router;
//# sourceMappingURL=rating.resturant.api.js.map