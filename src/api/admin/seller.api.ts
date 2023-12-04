import express from "express";
import {
    create,
    getAllSeller,
    getSeller,
} from "../../controller/seller/index.seller.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create",  create);
router.get("/get", getAllSeller);
router.get("/get/:id", getSeller);
// router.put("/update/:id", AdminauthJWT, update);
// router.delete("/delete/:id", AdminauthJWT, deleteportfolio);
// router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
