import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter your name"],
            maxLength: [30, "Name cannot exceed 30 characters"],
            minLength: [4, "Name should have more than 4 characters"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minLength: [8, "Password should have a minimum of 8 characters"],
        },
        role: {
            type: String,
            enum: ["user", "teacher", "admin"],
            default: "user",
        },
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
        purchasePackage: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Package",
            },
        ],
        purchaseClass: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Class",
            },
        ],

        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    { timestamps: true }
);

// exclude sensitive data
userSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        if (ret) {
            delete ret.password;
            delete ret.role;
        }
        return ret;
    },
});

// hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generating reset password token
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
