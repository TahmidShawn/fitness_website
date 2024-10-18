import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		throw new ErrorHandler("Please login to access this route", 401);
	}
	const decodedData = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decodedData.id);

	next();
});

export const authorizeRoles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			throw new ErrorHandler(
				`you are not allowed to access this resource`,
				403
			);
		}
		next();
	};
};
