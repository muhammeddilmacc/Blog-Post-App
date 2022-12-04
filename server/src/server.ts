import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/post';
import adminRoutes from './routes/admin';

dotenv.config();

const app = express();


/** Connect to Mongo */

mongoose.connect(process.env.MONGO_URI!);

mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {

  console.log("mongoose is connected")

})



/** Parse the body of the request */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


/** Routes */
app.use(postRoutes);
app.use(adminRoutes);
/** Error handling */
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

/** Listen */
app.listen(config.port, () => console.log(`Server is running ${config.host}:${config.port}`));