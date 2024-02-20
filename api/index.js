import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MONGO CONNECTED !!!')
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.listen(3000, () => {
    console.log('SERVER IS LIVE ON PORT 3000');
});

app.use("/api/user", userRoutes);