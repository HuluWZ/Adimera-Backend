"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
        default: "0"
    },
    address: {
        type: String
    },
    profilePicture: {
        type: String
    },
    gender: {
        type: String
    },
    activationCode: {
        type: String
    },
    passCode: {
        type: String
    },
    status: {
        type: String,
        default: "0"
    },
    agreeStatus: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.model.js.map