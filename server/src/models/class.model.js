import mongoose from "mongoose";
import commentSchema from "./comment.model";

const classSchema = new mongoose.Schema(
    {
        trainer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trainer",
            required: true,
        },
        className: {
            type: String,
            required: [true, "Please add class name"],
            maxLength: [40, "Class name cannot exceed 40 characters"],
            minLength: [4, "Class name should have more than 4 characters"],
            unique: [true, "Class name must be unique"],
        },
        description: {
            type: String,
            required: [true, "Please add description"],
            maxLength: [200, "Description cannot exceed 200 characters"],
            minLength: [20, "Description should have more than 20 characters"],
        },
        images: {
            type: [String],
            required: [true, "Please upload at least one class photo"],
            validate: {
                validator: function (imagesArray) {
                    return imagesArray.length > 0 && imagesArray.length <= 7;
                },
                message: "You must upload between 1 and 7 photos",
            },
        },
        category: {
            type: String,
            required: [true, "Please select class category"],
            enum: {
                values: [
                    "Pilates",
                    "Yoga",
                    "Indoor Training",
                    "Dance",
                    "Kickboxing",
                    "Circuit Training",
                    "Strength Training",
                    "Open Gym",
                    "Cardio",
                ],
                message: "Please select a valid category",
            },
        },
        price: {
            type: Number,
            required: [true, "Please enter the class fee"],
        },
        discountPercentage: {
            type: Number,
            required: [true, "Please enter the discount percentage"],
            min: [0, "Discount must be at least 0%"],
            max: [100, "Discount cannot exceed 100%"],
        },
        duration: {
            type: Number,
            required: [true, "Please provide class duration"],
        },
        classDates: {
            type: [String],
            required: [true, "Please select class date"],
            validate: {
                validator: function (datesArray) {
                    return datesArray.length > 2 && datesArray.length <= 5;
                },
                message: "You must take 3-5 classes a week",
            },
        },
        maxStudents: {
            type: Number,
            default: 20,
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            },
        ],
        averageRating: {
            type: Number,
            default: 0,
            min: [0, "Rating must be at least 0"],
            max: [5, "Rating must not exceed 5"],
        },
        comments: [commentSchema],
    },
    { timestamps: true }
);

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);
export default Class;
