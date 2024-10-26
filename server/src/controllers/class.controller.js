import ErrorHandler from "../utils/errorHandler.js";
import Class from "../models/class.model.js";
import asyncHandler from "../utils/asyncHandler.js";

// Fetch all available class
export const fetchAllClass = asyncHandler(async (req, res, next) => {
    const classList = await Class.find().select(
        "className description images price discountPercentage"
    );

    res.status(200).json({
        success: true,
        message: "Class fetched successfully",
        data: classList,
    });
});
