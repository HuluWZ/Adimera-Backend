import express from "express";
import {
    create, 
    getContact, 
    getContacts
} from "../../controller/contact/index.contact.controller";
import { AdminauthJWT } from "../../middleware/authJWT";

const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", create);
router.get("/get", AdminauthJWT, getContacts);
router.get("/show/:id", AdminauthJWT, getContact);

export default router;
