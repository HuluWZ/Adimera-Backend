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
exports.deletead = void 0;
const ad_model_1 = __importDefault(require("../../model/ad.model"));
// import  user from "../../model/user"
const deletead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the ID of the ad to be deleted from the request params
    const { id } = req.params;
    // Try to delete the ad record with the specified ID
    try {
        const removed = yield ad_model_1.default.findByIdAndDelete(id);
        // If the ad record was not deleted successfully, throw an error
        if (!removed)
            throw Error("Something went wrong ");
        // Return a success response to the client
        res
            .status(200)
            .json({ message: "ad deleted successfully", success: true });
    }
    catch (error) {
        // If an error occurs, return a server error response to the client
        res.status(500).json({ message: "server error", success: false });
    }
});
exports.deletead = deletead;
//# sourceMappingURL=delete.ad.controller.js.map