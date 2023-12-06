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
exports.getPortfolio = exports.getPortfolios = void 0;
const portfolio_db_1 = require("../../utils/db_functions/portfolio.db");
const getPortfolios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolios = yield (0, portfolio_db_1.getAll)();
    res.status(200).send(portfolios.reverse());
});
exports.getPortfolios = getPortfolios;
const getPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const portfolio = yield (0, portfolio_db_1.showSingle)(id);
    try {
        if (portfolio) {
            //Responding the data to any request made
            return res.status(200).json(portfolio);
        }
    }
    catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.getPortfolio = getPortfolio;
//# sourceMappingURL=get.portfolio.controller.js.map