"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the contact-info  mongoose model
const ContactInfoSchema = new mongoose_1.Schema({
    name: { type: String },
    value: { type: String },
    type: { type: String },
});
exports.default = (0, mongoose_1.model)("ContactInfo", ContactInfoSchema);
//# sourceMappingURL=contactInfo.model.js.map