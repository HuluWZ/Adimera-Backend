"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SellerSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "FirstName is required."],
        minlength: 3,
    },
    lastName: {
        type: String,
        required: [true, "LastName is required."],
        minlength: 3,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    phone: {
        type: String,
        minlength: 10,
        maxlength: 13,
        required: [true, "Phone number is required"],
    },
    role: {
        type: String,
        default: "2"
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    status: {
        type: String,
        default: "1"
    },
}, { timestamps: true });
//exporting the model
exports.default = (0, mongoose_1.model)("Seller", SellerSchema);
//# sourceMappingURL=seller.model.js.map