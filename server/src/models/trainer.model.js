import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        shortBio: {
            type: String,
            required: [true, "Please enter your bio"],
            maxLength: [100, "Bio cannot exceed 100 characters"],
            minLength: [12, "Bio should have more than 12 characters"],
        },
        experience: {
            type: String,
            required: [true, "Please enter your experience"],
        },
        skills: {
            type: [String],
            required: [true, "Please enter at least one skill"],
            validate: {
                validator: function (skillsArray) {
                    return skillsArray.length > 0 && skillsArray.length <= 4;
                },
                message: "You must have between 1 and 4 skills",
            },
        },
        image: {
            type: String,
            required: [true, "Please upload your image"],
        },
        mobileNo: {
            type: String,
            required: [true, "Please provide your mobile number"],
        },
        dateOfBirth: {
            type: Date,
            required: [true, "Please provide your date of birth"],
        },
        facebookUrl: {
            type: String,
            required: [true, "Please provide your Facebook URL"],
        },
    },
    { timestamps: true }
);

const Trainer =
    mongoose.models.Trainer || mongoose.model("Trainer", trainerSchema);
export default Trainer;
