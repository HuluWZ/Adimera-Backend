import express from "express";
import {
    create,
    getAllCategory,
    getCategory,
    remove,
    update,
    // addImage,
    // deleteImage
} from "../../controller/category/index.category.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", upload.array("files",10), create);
router.get("/get", getAllCategory);
router.get("/get/:id", getCategory);
router.put("/update/:id", upload.any(), update);
router.delete("/delete/:id", remove);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
