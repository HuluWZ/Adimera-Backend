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
exports.create = void 0;
const car_model_1 = __importDefault(require("../../model/car.model"));
const help_1 = require("../../utils/db_functions/help");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body
    const { 
    //Typescript Interface for CAR
    category, year, bodyType, engine, transmission, color, price, type, phoneNumber, dealershipName } = req.body;
    //Start a try block to handle any errors that may occur
    try {
        //Check if the req.method is equal to POST. If it is not, then returns a 405 Method Not Allowed response with an error message
        if (req.method === "POST") {
            //Check if the req.files object is not null. If it is, then returns a 403 Forbidden response with an error message
            if (req.files) {
                //Assign the req.files object to the files variable
                const files = req.files;
                //Call the Mloop() function to upload the files to a cloud storage provider. The urls variable is assigned the array of URLs of the uploaded files
                const urls = yield (0, help_1.Mloop)(files);
                //Creating the new car
                const car = yield new car_model_1.default({
                    category: category,
                    year: year,
                    bodyType: bodyType,
                    engine: engine,
                    transmission: transmission,
                    color: color,
                    price: price,
                    type: type,
                    files: urls,
                    phoneNumber: phoneNumber,
                    dealershipName: dealershipName
                });
                //Save the car
                car.save();
                //Return a 201 Created response with a success message
                return res.status(201).json({
                    success: true,
                    message: "car added sucessfully",
                });
            }
            else {
                //Return a 403 Forbidden response with an error message
                return res.status(403).json({
                    success: true,
                    message: "At least 3 Images are required",
                });
            }
        }
        else {
            //Return a 405 Method Not Allowed response with an error message
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    }
    catch (error) {
        //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.create = create;
//# sourceMappingURL=create.car.controller.js.map