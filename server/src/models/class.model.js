import mongoose from "mongoose";
import ErrorHandler from "../utils/errorHandler";

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
            minLength: [20, "Bio should have more than 20 characters"],
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
        },
        price: {
            type: String,
            required: [true, "Please enter the class fee"],
        },
        duration: {
            type: Date,
            required: [true, "Please provide class duration"],
        },
        Date: {
            type: [String],
            required: [true, "Please select class date"],
            validate: {
                validator: function (datesArray) {
                    return datesArray.length > 2 && datesArray.length <= 5;
                },
                message: "You must take 3-5 class a week",
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
    },
    { timestamps: true }
);

// classSchema.pre("save", function (next) {
//     if (this.students.length > this.maxStudents) {
//         throw new ErrorHandler(
//             `Cannot enroll more than ${this.maxStudents} students in this class`,
//             403
//         );
//     }
//     next();
// });

const Class = mongoose.models.Class || mongoose.model("Class", classSchema);
export default Class;
