"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the contact  mongoose model
const ContactSchema = new mongoose_1.Schema({
    fullName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    subject: { type: String },
    message: { type: String }
});
exports.default = (0, mongoose_1.model)("Contact", ContactSchema);
//# sourceMappingURL=contact.model.js.map