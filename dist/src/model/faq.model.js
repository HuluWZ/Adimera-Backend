"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the faq  mongoose model
const FaqSchema = new mongoose_1.Schema({
    question: { type: String },
    answer: { type: String },
});
exports.default = (0, mongoose_1.model)("FAQ", FaqSchema);
//# sourceMappingURL=faq.model.js.map