"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the testimonial  mongoose model
const TestimonialSchema = new mongoose_1.Schema({
    name: { type: String },
    message: { type: String },
    status: { type: String }
});
exports.default = (0, mongoose_1.model)("testimonial", TestimonialSchema);
//# sourceMappingURL=testimonial.model.js.map