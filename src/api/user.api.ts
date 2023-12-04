import express from "express";
import userAuth from "./user/user-auth.api";
import bussiness from "./user/rating.bussiness.api";
import resturant from "./user/rating.resturant.api";



const router = express.Router();

// Define routes for various API modules and associate them with corresponding sub-routers
router.use("/auth-user", userAuth);
router.use("/business", bussiness);
router.use("/restaurant",resturant);


export default router;



