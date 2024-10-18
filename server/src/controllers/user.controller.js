import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import sendToken from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// Register User

export const registerUser = asyncHandler(async (req, res, next) => {
    // validate data
    const { username, email, password } = req.body;
    if (!email || !password || !username) {
        throw new ErrorHandler("Please enter valid information", 400);
    }
    let user = await User.findOne({ email });
    if (user) {
        throw new ErrorHandler(
            "An account with this email already exists. Please use a different email.",
            409
        );
    }
    // Creating a new user
    user = await User.create({
        username,
        email,
        password,
    });

    // Send token
    const { token, options } = sendToken(user);

    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Registration successful. You are now logged in.",
        user,
    });
});

// Login User

export const loginUser = asyncHandler(async (req, res, next) => {
    // validate data
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ErrorHandler("Please enter valid information", 400);
    }
    let user = await User.findOne({ email });
    if (!user) {
        throw new ErrorHandler("Please enter valid information", 401);
    }
    // Matching Password
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        throw new ErrorHandler("Invalid Email or password", 401);
    }
    // Send token
    const { token, options } = sendToken(user);

    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Login successful. You are now logged in.",
        user,
    });
});

// Logout User

export const logout = asyncHandler(async (req, res, next) => {
    // remove cookie
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out successfully",
    });
});

// Forgot Password

export const forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        throw new ErrorHandler("Invalid Email or password", 401);
    }
    // get reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.CORS_ORIGIN}/password/reset/${resetToken}`;

    const message = `your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then , please ignore it`;

    // send email
    try {
        await sendEmail({
            email: user.email,
            subject: "Binary website password recovery",
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email send to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        throw new ErrorHandler(error.message, 500);
    }
});

// reset password

export const resetPassword = asyncHandler(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        throw new ErrorHandler(
            "Reset password token is invalid or has been expired",
            400
        );
    }
    if (req.body.password !== req.body.confirmPassword) {
        throw new ErrorHandler("Password does not match", 400);
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    const { token, options } = sendToken(user);
    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Password reset successful. You are now logged in",
        user,
    });
});

// Get Me

export const getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const { token, options } = sendToken(user);
    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "user found",
        user,
    });
});

// Update user password

export const updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    const isPasswordMatched = await user.comparePassword(
        req.body.currentPassword
    );

    if (!isPasswordMatched) {
        throw new ErrorHandler("Old password is incorrect", 401);
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        throw new ErrorHandler("password does not matched", 401);
    }

    user.password = req.body.newPassword;
    await user.save();
    const { token, options } = sendToken(user);
    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Password update successfully",
        user,
    });
});
