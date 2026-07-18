import express from 'express';
import './config/env.js'
import { dbConnect } from './config/db.js';
import authRoute from './routes/authRoute.js';
import cookieParser from "cookie-parser";
import passport from './config/passport.js'
import sessionRoute from './routes/sessionRoute.js';
import profileRoute from './routes/profileRoute.js';
import cors from 'cors'
import subscriptionRoute from './routes/subscriptionRoute.js';
import subscriptionExpiryJob from './job/subscriptionExpiryJob.js';
import otpExpiryJob from './job/otpExpiryJob.js';


const app = express()

const port = process.env.APP_PORT || 5000


<<<<<<< HEAD

app.use(cors());
=======
app.use(cors({
  origin: "http://localhost:5173", // React app
  credentials: true,
}));
>>>>>>> 4ec9480463db2e202057f1dcd5de40c403131d5e
app.use(passport.initialize())
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



dbConnect()
subscriptionExpiryJob()
otpExpiryJob()


app.use('/api/auth',authRoute);
app.use('/api/session', sessionRoute);
app.use('/api/profile', profileRoute);
app.use('/api/subscription', subscriptionRoute);




app.get('/', (req, res) => {
    res.send("Reel Forge Backend is running successfully!");
});

app.listen(port, () => console.log(`server running on port ${port}`));

export default app

