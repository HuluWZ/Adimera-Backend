"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getresturant = exports.getresturants = void 0;
const resturant_db_1 = require("../../utils/db_functions/resturant.db");
// This is a controller function for getting a list of all restaurants
const getresturants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve all restaurant records from the database
    const restaurants = yield (0, resturant_db_1.getAll)();
    // Respond with a 200 OK status and send the list of restaurants
    res.status(200).send(restaurants);
});
exports.getresturants = getresturants;
// This is a controller function for getting a single restaurant by ID
const getresturant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructure the 'id' from req.params
    const { id } = req.params;
    // Retrieve a single restaurant record from the database using the provided ID
    const restaurant = yield (0, resturant_db_1.showSingle)(id);
    // Respond with a 200 OK status and send the single restaurant record
    res.status(200).send(restaurant);
});
exports.getresturant = getresturant;
//# sourceMappingURL=get.resturant.controller.js.map