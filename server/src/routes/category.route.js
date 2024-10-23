import Router from "express";

import {
    fetchAllCategory,
    fetchSingleCategory,
} from "../controllers/category.controller.js";
const router = Router();

router.route("/category").get(fetchAllCategory);
router.route("/category/:categoryName").get(fetchSingleCategory);

export default router;
