import express from "express";
import authadmin from "./admin/admin-auth.api";
import news from "./admin/news.api";
import job from "./admin/job.api";

import contact from "./admin/contact.api";
import contactinfo from "./admin/contactinfo.api";
import restaurant from "./admin/resturant.api";
import portfolio from "./admin/portfolio.api";
import hero from "./admin/hero.api";
import about from "./admin/about.api";
import business from "./admin/bussiness.api";
import testimonial from "./admin/testimonial.api";
import car from "./admin/car.api";
import ad from "./admin/ad.api";
import team from "./admin/team.api";
import faq from "./admin/faq.api";
import partner from "./admin/partner.api";
import step from "./admin/step.api";

const router = express.Router();

// Define routes for various API modules and associate them with corresponding sub-routers
router.use("/auth-admin", authadmin);
router.use("/news", news);
router.use("/job", job);

router.use("/restaurant", restaurant);
router.use("/portfolio", portfolio);
router.use("/hero", hero);
router.use("/car", car)
router.use("/about", about);
router.use("/team", team);
router.use("/faq", faq);
router.use("/post", ad);
router.use("/step", step);
router.use("/partner", partner);
router.use("/business", business);
router.use("/testimonial", testimonial);
router.use("/contact", contact);
router.use("/contact-info", contactinfo);

export default router;
