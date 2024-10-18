import multer from "multer";
import path from "path";

// for image
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/temp");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

// for video
const videoFileFilter = (req, file, cb) => {
	const fileTypes = /mp4|mkv|avi|mov/;
	const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = file.mimetype.startsWith("video");

	if (extname && mimetype) {
		cb(null, true);
	} else {
		cb(new Error("Only video files are allowed!"), false);
	}
};

export const uploadVideo = multer({
	storage,
	fileFilter: videoFileFilter,
});

export const upload = multer({ storage });
