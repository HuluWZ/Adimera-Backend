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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const car_model_1 = __importDefault(require("../../model/car.model"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { category, year, bodyType, engine, transmission, color, price, type, phoneNumber, dealershipName } = req.body;
    //Destructing the id from req.params
    const { id } = req.params;
    //Create an object to store the updated data
    const updateData = {
        category,
        year,
        bodyType,
        engine,
        transmission,
        color,
        price,
        type,
        phoneNumber,
        dealershipName
    };
    //Find the car with the specified id
    const car = yield car_model_1.default.findOne({ _id: id });
    try {
        //Check if the request method is PUT. If it is not, return a 405 Method Not Allowed response
        if (req.method !== "PUT") {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
        //Check if the car was found. If it was not, return a 404 Not Found response
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "car not found",
            });
        }
        //Update the car with the new data
        car.updateOne(updateData, { useFindAndModify: false }).then((data) => {
            //Check if the update was successful. If it was not, return a 404 Not Found response
            if (!data) {
                res.status(404).send({
                    message: `Cannot update car with id=${id}. Maybe car was not found!`,
                });
            }
            else {
                //Return a 201 Created response with a success message
                return res.status(201).json({
                    message: "car updated successfully.",
                });
            }
        });
    }
    catch (error) {
        //Catch any errors that occur and return a 412 Precondition Failed response
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.car.controller.js.map