"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the team  mongoose model
const Teamchema = new mongoose_1.Schema({
    title: { type: String },
    name: { type: String },
    files: { type: Array },
});
exports.default = (0, mongoose_1.model)("Team", Teamchema);
//# sourceMappingURL=team.model.js.map