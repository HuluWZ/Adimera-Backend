import express from "express";
import userAuth from "./user/user-auth.api";

const router = express.Router();

// Define routes for various API modules and associate them with corresponding sub-routers
router.use("/auth-user", userAuth);


export default router;



