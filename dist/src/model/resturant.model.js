"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importing Libraries
const mongoose_1 = require("mongoose");
const featuredSchema = new mongoose_1.Schema({
    rating: {
        type: String
    },
    author: {
        type: String
    },
    avatar: {
        type: Array
    },
    review: {
        type: String
    }
});
//using monoose to create the resturant schema
const resturantSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    rating: {
        type: Number
    },
    type: {
        type: String
    },
    files: {
        type: Array,
    },
    average: {
        type: String
    },
    counts: {
        type: Array, default: [
            { rating: 5, count: 0 },
            { rating: 4, count: 0 },
            { rating: 3, count: 0 },
            { rating: 2, count: 0 },
            { rating: 1, count: 0 },
        ]
    },
    featured: {
        type: [featuredSchema], default: []
    }
});
exports.default = (0, mongoose_1.model)("resturant", resturantSchema);
//# sourceMappingURL=resturant.model.js.map