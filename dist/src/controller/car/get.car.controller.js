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
exports.showCar = exports.getCars = void 0;
const car_db_1 = require("../../utils/db_functions/car.db");
//Get all cars async function
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Fetching all cars from the database and assigning it to cars
    const cars = yield (0, car_db_1.getAll)();
    //Reverse the array to get the latest cars at first
    cars.reverse();
    //Responding the data to any request made
    return res.status(200).json(cars);
});
exports.getCars = getCars;
//Get Single car
const showCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destructing id from req.params
    const { id } = req.params;
    //Fetching single car using the id in the req.params from the database and assigning it to car
    const car = yield (0, car_db_1.showSingle)(id);
    try {
        if (car) {
            //Responding the data to any request made
            return res.status(200).json(car);
        }
    }
    catch (error) {
        //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.showCar = showCar;
//# sourceMappingURL=get.car.controller.js.map