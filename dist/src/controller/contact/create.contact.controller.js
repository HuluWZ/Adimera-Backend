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
//Importing the contact model to the controller
const contact_model_1 = __importDefault(require("../../model/contact.model"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    const { fullName, subject, message, email, phoneNumber } = req.body;
    // Try to create a new contact
    try {
        const Contact = yield new contact_model_1.default({
            fullName,
            subject,
            message,
            email,
            phoneNumber,
        });
        // Save the contact
        Contact.save();
        // Return a 201 Created response with a success message
        return res.status(201).json({
            success: true,
            message: "message sent successfully",
        });
    }
    catch (error) {
        // Catch any errors that occur and return a 412 Precondition Failed response
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
});
exports.create = create;
//# sourceMappingURL=create.contact.controller.js.map