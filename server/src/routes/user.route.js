import Router from "express";
import {
    forgotPassword,
    getMe,
    loginUser,
    logout,
    registerUser,
    resetPassword,
    updatePassword,
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getMe);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

export default router;
