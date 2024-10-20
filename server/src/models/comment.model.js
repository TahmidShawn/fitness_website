import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comment: {
            type: String,
            required: true,
            maxLength: [200, "Comment cannot exceed 200 characters"],
        },
        postedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { _id: false }
);

export default commentSchema;
