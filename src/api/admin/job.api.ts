import express from "express";
import {
    create,
    update,
    showJob,
    getJobs,
    getJobType,
    deletejob,
    createType,
    deletejobtype
} from "../../controller/job/index.job.controller";
import { AdminauthJWT } from "../../middleware/authJWT";
import { upload } from "../../config/mutler";

const router = express.Router();
router.post("/create", AdminauthJWT, upload.array("files", 10), create);
router.get("/get", getJobs);
router.get("/show/:id", showJob);
router.put("/update/:id", AdminauthJWT, update);
router.delete("/delete/:id", AdminauthJWT, deletejob);


router.post("/create-type", AdminauthJWT, upload.array("files", 10), createType);
router.get("/get-type", getJobType);
router.delete("/delete-type/:id", AdminauthJWT, deletejobtype);



export default router;
