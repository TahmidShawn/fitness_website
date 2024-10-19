import Router from "express";

import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";
import { submitTrainerApplication } from "../controllers/trainer.controller.js";
const router = Router();

router
    .route("/apply-for-trainer")
    .post(isAuthenticatedUser, submitTrainerApplication);

export default router;
