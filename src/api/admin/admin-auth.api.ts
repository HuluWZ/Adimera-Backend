import express from "express";
import {
  register,
  getUsers,
  getuser,
  login,
  resetPassword,
  changePassword
} from "../../controller/auth/Admin/index.auth.controller";

import { AdminauthJWT } from "../../middleware/authJWT";

// Create an Express router
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", register);
router.get("/get", AdminauthJWT, getUsers);
router.get("/show/:id", AdminauthJWT, getuser);
router.post("/login", login);
router.post("/change", AdminauthJWT, changePassword);
router.post("/reset/:id", AdminauthJWT, resetPassword);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
