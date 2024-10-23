import ErrorHandler from "../utils/errorHandler.js";
import Class from "../models/class.model.js";
import asyncHandler from "../utils/asyncHandler.js";

// Fetch all available categories
export const fetchAllCategory = asyncHandler(async (req, res, next) => {
    const categoryList = await Class.find();
    console.log(categoryList);

    res.status(200).json({
        success: true,
        message: "Categories fetched successfully",
        data: categoryList,
    });
});

// Fetch a single category by name
export const fetchSingleCategory = asyncHandler(async (req, res, next) => {
    const { categoryName } = req.params;
    if (/\s/.test(categoryName) || /[A-Z]/.test(categoryName)) {
        throw new ErrorHandler(
            "Invalid category format. Use hyphens and lowercase letters only.",
            400
        );
    }
    const formattedCategoryName = categoryName.replace(/-/g, " ");
    const singleCategory = await Class.findOne({
        category: new RegExp(`^${formattedCategoryName}$`, "i"),
    });
    if (!singleCategory) {
        throw new ErrorHandler("Category not found", 404);
    }
    res.status(200).json({
        success: true,
        message: "Category fetched successfully",
        data: singleCategory,
    });
});
