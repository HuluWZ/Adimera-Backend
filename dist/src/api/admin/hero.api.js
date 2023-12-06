"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_hero_controller_1 = require("../../controller/hero/index.hero.controller");
const authJWT_1 = require("../../middleware/authJWT");
const mutler_1 = require("../../config/mutler");
const router = express_1.default.Router();
router.post("/add-image/:id", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_hero_controller_1.addImage);
router.delete("/delete-image/:heroId/:id", authJWT_1.AdminauthJWT, index_hero_controller_1.deleteImage);
router.post("/create", authJWT_1.AdminauthJWT, mutler_1.upload.array("files", 10), index_hero_controller_1.create);
router.get("/get", index_hero_controller_1.getHeros);
router.get("/show/:id", index_hero_controller_1.getHero);
router.put("/update/:id", authJWT_1.AdminauthJWT, index_hero_controller_1.update);
router.delete("/delete/:id", authJWT_1.AdminauthJWT, index_hero_controller_1.deleteHero);
exports.default = router;
//# sourceMappingURL=hero.api.js.map