"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importing Libraries
const mongoose_1 = require("mongoose");
//using monoose to create the portfolio schema
const portfolioSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    body: {
        type: String,
    },
    files: {
        type: Array,
    },
});
exports.default = (0, mongoose_1.model)("Portfolio", portfolioSchema);
//# sourceMappingURL=portfolio.model.js.map