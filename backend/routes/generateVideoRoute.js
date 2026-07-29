import express from "express"
import { generateVideo } from "../controllers/generateVideo/generateVideo.js";
import { authMiddleware } from "../middleware/middleware.js";


const generateVideoRoute = express.Router()

generateVideoRoute.post(
    "/:id/generate",
    authMiddleware,
    generateVideo
);

export default generateVideoRoute