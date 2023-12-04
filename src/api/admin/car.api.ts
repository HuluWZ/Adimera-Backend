import express from "express";
import {
    create,
    getCars,
    showCar,
    deleteCar, 
    update, 
    deleteImage, 
    addImage
} from "../../controller/car/index.car.controller";
import { AdminauthJWT } from "../../middleware/authJWT";

import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:carId/:id", AdminauthJWT, deleteImage);
router.get("/get", getCars);
router.get("/show/:id", showCar);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deleteCar);

export default router;
