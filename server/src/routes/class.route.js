import Router from "express";
import { fetchAllClass } from "../controllers/class.controller.js";

const router = Router();

router.route("/class").get(fetchAllClass);

export default router;
