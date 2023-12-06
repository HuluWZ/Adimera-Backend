"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_auth_api_1 = __importDefault(require("./user/user-auth.api"));
const rating_bussiness_api_1 = __importDefault(require("./user/rating.bussiness.api"));
const rating_resturant_api_1 = __importDefault(require("./user/rating.resturant.api"));
const router = express_1.default.Router();
// Define routes for various API modules and associate them with corresponding sub-routers
router.use("/auth-user", user_auth_api_1.default);
router.use("/business", rating_bussiness_api_1.default);
router.use("/restaurant", rating_resturant_api_1.default);
exports.default = router;
//# sourceMappingURL=user.api.js.map