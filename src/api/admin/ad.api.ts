import express from "express";
import {
 create,
 update, 
 getad,
 getads, 
 deletead, 
 addImage,
 deleteImage

} from "../../controller/ad/index.ad.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

const router = express.Router();

router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:heroId/:id", AdminauthJWT, deleteImage);
router.post("/create",   upload.array("files", 10), create);
router.get("/get",  getads);
router.get("/show/:id",  getad);
router.put("/update/:id",  AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT,  deletead);



export default router;
