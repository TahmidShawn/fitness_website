import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import ErrorHandler from "./utils/errorHandler.js";
import errorMiddleware from "./middlewares/error.middleware.js";

// import routes
import userRouter from "./routes/user.route.js";
import trainerRouter from "./routes/trainer.route.js";

const app = express();

// middleware setup
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// catch undefined route
app.use((req, res, next) => {
    next(new ErrorHandler(`Cannot ${req.method} ${req.originalUrl}`, 404));
});

// routes declaration
app.use("/api/v1", userRouter);
app.use("/api/v1", trainerRouter);

// middleware for errors
app.use(errorMiddleware);

export default app;
