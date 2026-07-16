import express from 'express'
import { getProfile, updateAvatar, updateProfile } from '../controllers/profile/profile.js';
import { authMiddleware } from '../middleware/middleware.js';
import upload from '../middleware/multer.js';

const profileRoute = express.Router();

profileRoute.get("/get-profile",authMiddleware, getProfile);

profileRoute.patch("/update-profile",authMiddleware, updateProfile);

profileRoute.put("/update-avatar", upload.single("avatar"),updateAvatar);

export default profileRoute