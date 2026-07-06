import express from 'express'
import { loginHandler, logoutHandler, refreshTokenHandler, signUpHandler } from '../controllers/auth.js';

const authRoute = express.Router();

authRoute.post('/signup', signUpHandler);

authRoute.post('/login', loginHandler);

authRoute.post('/refresh-token', refreshTokenHandler);

authRoute.post('/logout', logoutHandler);

export default authRoute