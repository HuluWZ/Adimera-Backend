"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the news  mongoose model
const newsSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    body: {
        type: String
    },
    files: {
        type: Array
    },
    author: {
        type: String
    },
    type: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    count: {
        type: Number,
        default: 0
    },
    view: {
        type: Boolean,
        default: true
    }
});
exports.default = (0, mongoose_1.model)("News", newsSchema);
//# sourceMappingURL=news.model.js.map