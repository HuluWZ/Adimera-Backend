"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the step mongoose model
const stepSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
});
exports.default = (0, mongoose_1.model)("Step", stepSchema);
//# sourceMappingURL=step.model.js.map