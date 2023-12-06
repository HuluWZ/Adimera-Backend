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
const hero_db_1 = require("../../utils/db_functions/hero.db");
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { heroId, id } = req.params;
    try {
        if (req.method === 'DELETE') {
            //we use uuidv4 to generate a random and unique id for the heros
            const verifyhero = yield (0, hero_db_1.showSingle)(heroId);
            if (!verifyhero) {
                return res.status(404).json({
                    message: "hero not found",
                    status: false
                });
            }
            const filesarray = verifyhero.files;
            const newfilesarray = filesarray.filter((image) => image.id !== "Images/" + id);
            verifyhero.files = newfilesarray;
            verifyhero.save();
            return res.status(201).json({
                success: true,
                message: "image deleted sucessfully",
            });
        }
        else {
            return res.status(405).json({
                err: `${req.method} method not allowed`
            });
        }
    }
    catch (error) {
        return res.status(412).json({
            success: false,
            message: error
        });
    }
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=deleteImage.hero.controller.js.map