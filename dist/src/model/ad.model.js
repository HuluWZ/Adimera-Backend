"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the Advirtisment mongoose model
const AdSchema = new mongoose_1.Schema({
    title: { type: String },
    link: { type: String },
    adType: { type: String },
    files: { type: Array },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//exporting the model
exports.default = (0, mongoose_1.model)("AD", AdSchema);
//# sourceMappingURL=ad.model.js.map