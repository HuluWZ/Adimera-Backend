"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_news_controller_1 = require("../../controller/news/index.news.controller");
const authJWT_1 = require("../../middleware/authJWT");
const index_hero_controller_1 = require("../../controller/hero/index.hero.controller");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
// Define the routes and associate them with controller functions and middleware
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_news_controller_1.create);
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_news_controller_1.addImage);
router.delete("/delete-image/:newsId/:id", authJWT_1.AdminauthJWT, index_news_controller_1.deleteImage);
router.post("/image-news", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_news_controller_1.Image);
router.get("/toogle/:id", index_news_controller_1.toogle);
router.get("/get", index_news_controller_1.getnewss);
router.get("/getlanding", index_hero_controller_1.getLanding);
router.get("/show/:id", index_news_controller_1.shownewss);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_news_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_news_controller_1.deletenews);
exports.default = router;
//# sourceMappingURL=news.api.js.map