import express from "express";
import {
    create,
    getPortfolio,
    getPortfolios,
    deleteportfolio,
    update,
    addImage,
    deleteImage
} from "../../controller/portfolio/index.portfolio.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.get("/get", getPortfolios);
router.get("/show/:id", getPortfolio);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deleteportfolio);
router.delete("/delete-image/:portfolioId/:id", AdminauthJWT, deleteImage);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
