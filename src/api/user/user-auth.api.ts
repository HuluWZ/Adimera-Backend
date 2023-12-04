import express from "express";
import {
  register,
  getUsers,
  getuser,
  login,
  resetPassword,
  changePassword
} from "../../controller/auth/User/index.auth.controller";

import { UserAuthJWT } from "../../middleware/authJWT";

// Create an Express router
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", register);
router.get("/get",  getUsers);
router.get("/show/:id", UserAuthJWT, getuser);
router.post("/login", login);
router.post("/change", UserAuthJWT, changePassword);
router.post("/reset/:id", UserAuthJWT, resetPassword);

// Uncomment or add routes as needed
// router.delete("/delete", deleteEmployee);

export default router;
