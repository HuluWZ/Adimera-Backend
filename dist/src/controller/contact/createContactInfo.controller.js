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
exports.createInfo = void 0;
// Importing the contact info model to the controller
const contactInfo_model_1 = __importDefault(require("../../model/contactInfo.model"));
// Export the createInfo function
const createInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    const { name, value, type } = req.body;
    // Try to create a new contact info
    try {
        const ContactInfo = yield new contactInfo_model_1.default({
            name,
            value,
            type,
        });
        // Save the contact info
        yield ContactInfo.save();
        // Return a 201 Created response with a success message
        res.status(201).json({
            success: true,
            message: "contact info created successfully",
        });
    }
    catch (error) {
        // Catch any errors that occur and return a 412 Precondition Failed response
        res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.createInfo = createInfo;
//# sourceMappingURL=createContactInfo.controller.js.map