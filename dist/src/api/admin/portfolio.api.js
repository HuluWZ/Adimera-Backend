"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_portfolio_controller_1 = require("../../controller/portfolio/index.portfolio.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_portfolio_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_portfolio_controller_1.addImage);
router.get("/get", index_portfolio_controller_1.getPortfolios);
router.get("/show/:id", index_portfolio_controller_1.getPortfolio);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_portfolio_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_portfolio_controller_1.deleteportfolio);
router.delete("/delete-image/:portfolioId/:id", authJWT_1.AdminauthJWT, index_portfolio_controller_1.deleteImage);
// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);
exports.default = router;
//# sourceMappingURL=portfolio.api.js.map