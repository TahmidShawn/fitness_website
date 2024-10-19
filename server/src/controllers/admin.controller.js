import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import Trainer from "../models/trainer.model.js";

// Admin approves trainer application
export const approveTrainerApplication = asyncHandler(
    async (req, res, next) => {
        const { id } = req.params;
        const trainer = await Trainer.findById(id);

        if (!trainer) {
            return next(new ErrorHandler("Trainer application not found", 404));
        }

        // Update user status to approved
        const user = await User.findById(trainer.user);
        user.status = "approved";
        await user.save();

        res.status(200).json({
            success: true,
            message: "Trainer application approved successfully",
        });
    }
);

// Admin rejects trainer application
export const rejectTrainerApplication = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const trainer = await Trainer.findById(id);

    if (!trainer) {
        return next(new ErrorHandler("Trainer application not found", 404));
    }

    // Update user status to rejected
    const user = await User.findById(trainer.user);
    user.status = "rejected";
    await user.save();

    res.status(200).json({
        success: true,
        message: "Trainer application rejected successfully",
    });
});
