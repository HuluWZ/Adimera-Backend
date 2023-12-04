import express from "express";
import {
    addImage,
    deleteImage,
    create,
    update,
    getAbout,
    getAbouts,
    deleteAbout
} from "../../controller/about/index.about.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

// Create an Express router
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.get("/get", getAbouts);
router.get("/show/:id", getAbout);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deleteAbout);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:aboutId/:id", AdminauthJWT, deleteImage);

export default router;
