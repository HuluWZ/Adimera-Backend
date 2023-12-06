"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the about model
const AboutSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    files: { type: Array },
});
//exporting the model
exports.default = (0, mongoose_1.model)("About", AboutSchema);
//# sourceMappingURL=about.model.js.map