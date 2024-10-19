import Router from "express";
import {
    approveTrainerApplication,
    rejectTrainerApplication,
} from "../controllers/admin.controller.js";
import {
    authorizeRoles,
    isAuthenticatedUser,
} from "../middlewares/auth.middleware.js";
const router = Router();

router
    .route("/admin/approve-trainer/:id")
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        approveTrainerApplication
    );

router
    .route("/admin/reject-trainer/:id")
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        rejectTrainerApplication
    );

export default router;
