import express from "express";
import {
    create, 
    update,
    getContactInfos, 
    getContactInfo, 
    deleteInfo
} from "../../controller/contact/index.contact.controller";
import { AdminauthJWT } from "../../middleware/authJWT";

const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, create);
router.get("/get", getContactInfos);
router.get("/show/:id", AdminauthJWT, getContactInfo);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deleteInfo);

export default router;
