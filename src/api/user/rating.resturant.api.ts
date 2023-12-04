import express from "express";
import {
    rateRestaurant
} from "../../controller/resturant/index.resturant.controller";
import { UserAuthJWT } from "../../middleware/authJWT";

const router = express.Router();

router.post("/rate/:id", UserAuthJWT,  rateRestaurant);
export default router;