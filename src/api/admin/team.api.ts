import express from "express";
import {
    create,
    update,
    getItems,
    getItem,
    deleteItem,
    addImage,
    deleteImage
} from "../../controller/team/index.team.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

const router = express.Router();

router.post("/create", AdminauthJWT,  upload.array("files", 10), create);
router.get("/get", getItems);
router.get("/show/:id", getItem);
router.put("/update/:id", AdminauthJWT,  update);
router.delete("/delete/:id", AdminauthJWT,  deleteItem);
router.post("/add-image/:id", AdminauthJWT,  upload.array("files", 10), addImage);
router.delete("/delete-image/:teamId/:id", AdminauthJWT,  deleteImage);


export default router;
