import express from "express";
import {
 create,
 update, 
 getItems,
 getItem, 
 deleteItem
} from "../../controller/steps/index.steps.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

const router = express.Router();

router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.get("/get",  getItems);
router.get("/show/:id",  getItem);
router.put("/update/:id", AdminauthJWT,  update);
router.delete("/delete/:id", AdminauthJWT,  deleteItem);

export default router;
