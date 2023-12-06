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
Object.defineProperty(exports, "__esModule", { value: true });
exports.toogle = exports.shownewss = exports.getnewss = void 0;
const news_db_1 = require("../../utils/db_functions/news.db");
// This is a controller function for getting all news items
const getnewss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Fetching all news items from the database and assigning them to 'newss'
    const newss = yield (0, news_db_1.getAll)();
    // Responding with the data to any request made, with the latest data at the top (reverse order)
    return res.status(200).json(newss.reverse());
});
exports.getnewss = getnewss;
// This is a controller function for getting a single news item
const shownewss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the 'id' from req.params
    const { id } = req.params;
    // Fetching a single news item using the 'id' from req.params from the database and assigning it to 'news'
    const news = yield (0, news_db_1.showSingle)(id);
    try {
        if (news) {
            // If the news item is found, respond with the data
            news.count = news.count + 1;
            news.save();
            return res.status(200).json(news);
        }
    }
    catch (error) {
        // Handle any errors that occur during the process
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.shownewss = shownewss;
const toogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const news = yield (0, news_db_1.showSingle)(id);
    news.view = false;
    news.save();
    return res.status(200).json({
        message: "toogle successfully",
        success: true
    });
});
exports.toogle = toogle;
//# sourceMappingURL=get.news.controller.js.map