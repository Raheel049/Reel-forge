import express from 'express'
import { loginHandler, logoutHandler, forgetPassword, changePassword, refreshTokenHandler, signUpHandler, resendOtpHandler, verificationHandler } from '../controllers/auth.js';

const authRoute = express.Router();

authRoute.post('/signup', signUpHandler);

authRoute.post('/login', loginHandler);

authRoute.post('/refresh-token', refreshTokenHandler);

authRoute.post('/logout', logoutHandler);

authRoute.post('/resend-otp', resendOtpHandler);

authRoute.post('/verify-otp', verificationHandler);

authRoute.post("/forget-password", forgetPassword);

authRoute.post("/change-password", changePassword)

export default authRoute