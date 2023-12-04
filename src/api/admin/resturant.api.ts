import express from "express";
import {
    create,
    getresturant, 
    getresturants, 
    deleterestaurant,
    update,
    addImage, 
    deleteImage
} from "../../controller/resturant/index.resturant.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.get("/get", getresturants);
router.get("/show/:id", getresturant);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deleterestaurant);
router.delete("/delete-image/:resturantId/:id", AdminauthJWT, deleteImage);

export default router;
