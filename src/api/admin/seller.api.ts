import express from "express";
import {
    create,
    getAllSeller,
    getSeller,
    update,
    remove
} from "../../controller/seller/index.seller.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create",  create);
router.get("/get", getAllSeller);
router.get("/get/:id", getSeller);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
