"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanding = exports.getHero = exports.getHeros = void 0;
const hero_db_1 = require("../../utils/db_functions/hero.db");
const news_model_1 = __importDefault(require("../../model/news.model"));
// import JobModel from "../../model/job.model"
const bussiness_model_1 = __importDefault(require("../../model/bussiness.model"));
const resturant_model_1 = __importDefault(require("../../model/resturant.model"));
const car_model_1 = __importDefault(require("../../model/car.model"));
const ad_model_1 = __importDefault(require("../../model/ad.model"));
const getHeros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const folders = yield (0, hero_db_1.getAll)();
    res.status(200).send(folders);
});
exports.getHeros = getHeros;
const getHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const folder = yield (0, hero_db_1.showSingle)(id);
    res.status(200).send(folder);
});
exports.getHero = getHero;
const getLanding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const heros = yield (0, hero_db_1.getAll)();
    const news = yield news_model_1.default.find();
    const cars = yield car_model_1.default.find();
    // const job = await JobModel.find()
    const business = yield bussiness_model_1.default.find();
    const resturant = yield resturant_model_1.default.find();
    const ad = yield ad_model_1.default.find();
    const responseData = {
        hero: heros,
        car: cars,
        news: news,
        // job: job,
        business: business,
        restuarant: resturant,
        ad: ad
    };
    return res.status(200).json(responseData);
});
exports.getLanding = getLanding;
//# sourceMappingURL=get.hero.controller.js.map