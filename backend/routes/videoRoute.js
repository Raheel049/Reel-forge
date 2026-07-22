import express from 'express'
import { authMiddleware } from '../middleware/middleware.js';
import { generateVideoController} from '../controllers/video/promptController.js'


const videoRoute = express.Router();

videoRoute.post("/generate-video",authMiddleware, generateVideoController);



export default videoRoute