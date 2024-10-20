import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import Trainer from "../models/trainer.model.js";

export const submitTrainerApplication = asyncHandler(async (req, res, next) => {
    const {
        shortBio,
        experience,
        skills,
        image,
        mobileNo,
        dateOfBirth,
        facebookUrl,
    } = req.body;

    // Validate application data
    if (
        !shortBio ||
        !experience ||
        !skills ||
        !image ||
        !mobileNo ||
        !dateOfBirth ||
        !facebookUrl
    ) {
        throw new ErrorHandler("Please enter all required information", 400);
    }

    // Find the user
    let user = await User.findById(req.user.id);

    if (!user) {
        throw new ErrorHandler("User not found", 404);
    }

    // Check if user already has a trainer application
    if (user.status === "pending" || user.status === "approved") {
        throw new ErrorHandler(
            "You have already applied or have been approved as a trainer.",
            409
        );
    }

    // If the user was rejected update the existing trainer application
    let trainer;
    if (user.status === "rejected" && user.trainerId) {
        trainer = await Trainer.findByIdAndUpdate(
            user.trainerId,
            {
                shortBio,
                experience,
                skills,
                image,
                mobileNo,
                dateOfBirth,
                facebookUrl,
            },
            { new: true }
        );
    } else {
        // Create a new Trainer
        trainer = await Trainer.create({
            user: user.id,
            shortBio,
            experience,
            skills,
            image,
            mobileNo,
            dateOfBirth,
            facebookUrl,
        });
    }

    // Update the user status to pending
    user.status = "pending";
    user.trainerId = trainer.id;
    await user.save();

    res.status(201).json({
        success: true,
        message: "Trainer application submitted successfully",
        trainer,
    });
});
