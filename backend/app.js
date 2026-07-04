import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from './config/db.js';
import authRoute from './routes/authRoute.js';

const app = express()

const port = process.env.APP_PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

dbConnect()


app.use('/api/auth',authRoute);

app.listen(port, () => console.log(`server running on port ${port}`));

