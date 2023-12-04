import express from "express";
import {
  create,
  update,
  addImage,
  deleteImage,
  getbusinesss,
  showbusinesss,
  deletebusiness,
  rateBusiness
} from "../../controller/bussiness/index.bussiness.controller";
import { AdminauthJWT } from "../../middleware/authJWT";

import { upload } from "../../config/mutler";
const router = express.Router();

router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:businessId/:id", AdminauthJWT, deleteImage);
router.post("/rate-bussiness/:id",  rateBusiness);

router.get("/get",  getbusinesss);
router.get("/show/:id", showbusinesss);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deletebusiness);
export default router;