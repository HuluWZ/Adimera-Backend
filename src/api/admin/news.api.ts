import express from "express";
import {
    create,
    update,
    addImage,
    deleteImage,
    getnewss,
    shownewss,
    deletenews,
    Image
} from "../../controller/news/index.news.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { getLanding } from "../../controller/hero/index.hero.controller"
import { upload } from "../../config/mutler";
const router = express.Router();

// Define the routes and associate them with controller functions and middleware
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.post("/add-image/:id", AdminauthJWT, upload.array("files", 10), addImage);
router.delete("/delete-image/:newsId/:id", AdminauthJWT, deleteImage);
router.post("/image-news", AdminauthJWT, upload.array("files", 10), Image);

router.get("/get", getnewss);
router.get("/getlanding", getLanding);

router.get("/show/:id", shownewss);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deletenews);

export default router;
