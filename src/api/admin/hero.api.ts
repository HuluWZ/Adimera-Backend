import express from "express";
import {
 create,
 update, 
 getHero,
 getHeros, 
 deleteHero, 
 deleteImage, 
 addImage
} from "../../controller/hero/index.hero.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

const router = express.Router();

router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:heroId/:id", AdminauthJWT, deleteImage);
router.post("/create",  AdminauthJWT, upload.array("files", 10), create);
router.get("/get",  getHeros);
router.get("/show/:id",  getHero);
router.put("/update/:id",  AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT,  deleteHero);



export default router;
