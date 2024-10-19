import Router from "express";

import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/apply-for-trainer").post(isAuthenticatedUser,);

export default router;
