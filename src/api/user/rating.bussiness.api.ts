import express from "express";
import {
  rateBusiness
} from "../../controller/bussiness/index.bussiness.controller";
import { UserAuthJWT } from "../../middleware/authJWT";

const router = express.Router();

router.post("/rate/:id", UserAuthJWT,  rateBusiness);
export default router;