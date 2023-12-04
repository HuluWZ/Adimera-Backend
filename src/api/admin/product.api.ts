import express from "express";
import {
    create,
    getAllProduct,
    getProduct,
    // deleteportfolio,
    // update,
    // addImage,
    // deleteImage
} from "../../controller/product/index.product.controller";
import { AdminauthJWT,UserAuthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", UserAuthJWT,upload.array("files",10), create);
router.get("/get", getAllProduct);
router.get("/get/:id", getProduct);
// router.put("/update/:id", AdminauthJWT, update);
// router.delete("/delete/:id", AdminauthJWT, deleteportfolio);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
