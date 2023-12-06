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
const testimonial_model_1 = __importDefault(require("../../model/testimonial.model"));
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, message } = req.body;
    //Destructing the id from req.params
    const updateData = {
        name,
        message,
    };
    const { id } = req.params;
    //assigning the specfic hero to variable called hero
    const item = yield testimonial_model_1.default.findOne({ _id: id });
    if (req.method !== "PUT") {
        return res.status(405).json({
            err: `${req.method} method not allowed`,
        });
    }
    try {
        if (!item) {
            return res.status(400).json({
                success: false,
                message: "testimonial not found",
            });
        }
        item.updateOne(updateData, { useFindAndModify: false }).then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update testimonial with id=${id}. Maybe testimonial was not found!`,
                });
            }
            else
                return res.status(201).json({ message: "testimonial updated successfully." });
        });
    }
    catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message,
        });
    }
});
exports.update = update;
//# sourceMappingURL=update.testimonial.controller.js.map