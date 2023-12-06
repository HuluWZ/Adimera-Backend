"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the hero  mongoose model
const heroSchema = new mongoose_1.Schema({
    title: { type: String },
    link: { type: String },
    files: { type: Array },
});
exports.default = (0, mongoose_1.model)("Hero", heroSchema);
//# sourceMappingURL=hero.model.js.map