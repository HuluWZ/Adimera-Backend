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
exports.deleteImage = void 0;
const business_db_1 = require("../../utils/db_functions/business.db");
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Destruct the data sent from req.body
    // const uploader = async (path) => await uploads(path, "Images")
    const { businessId, id } = req.params;
    try {
        // Check if the request method is DELETE
        if (req.method === 'DELETE') {
            // Get the business with the specified ID
            const verifyItem = yield (0, business_db_1.showSingle)(businessId);
            // If the business is not found, return a 404 Not Found response
            if (!verifyItem) {
                return res.status(404).json({
                    message: "business not found",
                    status: false
                });
            }
            // Get the business's files array
            const filesarray = verifyItem.files;
            // Filter the files array to remove the image with the specified ID
            const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);
            // Update the business's files array with the filtered array
            verifyItem.files = newfilesarray;
            // Save the business changes
            verifyItem.save();
            // Return a success response
            return res.status(201).json({
                success: true,
                message: "image deleted sucessfully"
            });
        }
        else {
            // If the request method is not DELETE, return a 405 Method Not Allowed response
            return res.status(405).json({
                err: `${req.method} method not allowed`
            });
        }
    }
    catch (error) {
        // If an error occurs, return a 412 Precondition Failed response
        return res.status(412).json({
            success: false,
            message: error
        });
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=deleteImage.bussiness.controller.js.map