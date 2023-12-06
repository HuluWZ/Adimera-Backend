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
exports.addImage = void 0;
//Imporing file system library
const help_1 = require("../../../utils/db_functions/help");
const user_model_1 = __importDefault(require("../../../model/user.model"));
const addImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.params
    const { userId } = req.userData;
    //Start a try block to handle any errors that may occur
    try {
        //Check if the req.method is equal to POST. If it is not, then returns a 405 Method Not Allowed response with an error message
        if (req.method === "POST") {
            //Check if the req.files object is not null. If it is, then returns a 400 Bad Request response with an error message
            if (!req.files) {
                return res.status(401).json({
                    message: "file not found",
                    sucess: false
                });
            }
            //Assign the req.files object to the files variable
            const files = req.files;
            //Call the Mloop() function to upload the files to a cloud storage provider. The urls variable is assigned the array of URLs of the uploaded files
            const url = yield (0, help_1.loop)(files);
            //Find the car with the specified id and assign it to the verifyItem variable
            const verifyItem = yield user_model_1.default.findOne({ _id: userId });
            //Check if the verifyItem variable is not null. If it is, then returns a 404 Not Found response with an error message
            if (!verifyItem) {
                return res.status(404).json({
                    message: "user not found",
                    status: false,
                });
            }
            //Create a new object called url and assign it the first element of the urls array
            // let url = {}
            // urls.forEach((u) => {
            //     url = u
            // });
            //Assign the verifyItem.files array to the filesarray variable
            // verifyItem.files[0] = url
            //Push the url object to the filesarray array
            // filesarray = url
            //Save the verifyItem car
            verifyItem.save();
            //Returns a 201 Created response with a success message
            return res.status(201).json({
                success: true,
                message: "image added sucessfully",
            });
        }
        else {
            //Returns a 405 Method Not Allowed response with an error message
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
exports.addImage = addImage;
//# sourceMappingURL=addImage.auth.controller.js.map