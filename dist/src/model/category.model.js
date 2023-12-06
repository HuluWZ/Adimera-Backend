"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the hero  mongoose model
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Category", categorySchema);
//# sourceMappingURL=category.model.js.map