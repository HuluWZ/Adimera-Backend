"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// This is the schema for the car  mongoose model
const CarSchema = new mongoose_1.Schema({
    category: {
        type: String,
    },
    year: {
        type: String
    },
    bodyType: {
        type: String,
    },
    type: {
        type: String
    },
    engine: {
        type: String
    },
    transmission: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: String
    },
    files: {
        type: Array,
    },
    condition: {
        type: String
    },
    createdAt: {
        type: Date
    },
    status: {
        type: String,
        default: "AVAILABLE"
    },
    phoneNumber: {
        type: String
    },
    dealershipName: {
        type: String
    }
});
exports.default = (0, mongoose_1.model)("Car", CarSchema);
//# sourceMappingURL=car.model.js.map