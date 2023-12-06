import express from "express";
import authadmin from "./admin/admin-auth.api";
import category from "./admin/category.api";
import product from "./admin/product.api";
import seller from "./admin/seller.api";
import report from "./admin/report.api";

const router = express.Router();

// Define routes for various API modules and associate them with corresponding sub-routers
router.use("/auth-admin", authadmin);
router.use("/category", category);
router.use("/product", product);
router.use("/seller", seller);
router.use("/report", report);

export default router;
