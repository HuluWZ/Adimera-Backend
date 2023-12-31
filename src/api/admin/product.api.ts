import express from "express";
import {
    create,
    getAllProduct,
    getProduct,
    getRelatedProduct,
    getProductCategory,
    remove,
    update,
    // addImage,
    // deleteImage
} from "../../controller/product/index.product.controller";
import { AdminauthJWT,UserAuthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT,upload.array("files",10), create);
router.get("/get", getAllProduct);
router.get("/get/:id", getProduct);
router.get("/category/:id", getProductCategory);
router.get("/related/:id/:category", getRelatedProduct);
router.put("/update/:id", upload.any(), update);
router.delete("/delete/:id", remove);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
