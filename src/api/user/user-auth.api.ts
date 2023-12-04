import express from "express";
import {
  register,
  getUsers,
  getuser,
  login,
  MyProfile,
  deactivate,
  addImage,
  resetPassword,
  changePassword
} from "../../controller/auth/User/index.auth.controller";

import { UserAuthJWT, AdminauthJWT} from "../../middleware/authJWT";
import { upload } from "../../config/mutler"
// Create an Express router
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", register);
router.get("/get",  getUsers);
router.get("/show/:id", AdminauthJWT, getuser);
router.get("/profile", UserAuthJWT, MyProfile);
router.post("/login", login);
router.post("/change", UserAuthJWT, changePassword);
router.post("/reset/:id", UserAuthJWT, resetPassword);
router.post("/add-image", UserAuthJWT, upload.array("files", 10), addImage);
router.post("/deactivate/:id", AdminauthJWT, deactivate)


export default router;
