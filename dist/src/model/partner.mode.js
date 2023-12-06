"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the partner  mongoose model
const PartnerSchema = new mongoose_1.Schema({
    name: { type: String },
    files: { type: Array },
});
exports.default = (0, mongoose_1.model)("Partner", PartnerSchema);
//# sourceMappingURL=partner.mode.js.map