import express from 'express';
import './config/env.js'
import { dbConnect } from './config/db.js';
import authRoute from './routes/authRoute.js';
import cookieParser from "cookie-parser";
import passport from './config/passport.js'
import sessionRoute from './routes/sessionRoute.js';


const app = express()

const port = process.env.APP_PORT

app.use(passport.initialize())
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



dbConnect()


app.use('/api/auth',authRoute);
app.use('/api/session', sessionRoute)

app.listen(port, () => console.log(`server running on port ${port}`));

