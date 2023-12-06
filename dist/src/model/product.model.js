"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the hero  mongoose model
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    code: { type: String },
    price: { type: Number, required: [true, "price is required"] },
    image: [{ type: String, required: true }],
    uploadedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    color: { type: String },
    size: { type: String },
    quantity: { type: Number, default: 1 },
    totalRate: { type: String },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Product", productSchema);
//# sourceMappingURL=product.model.js.map