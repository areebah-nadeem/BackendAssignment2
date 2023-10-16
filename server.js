

const config = require('./config/config.js');
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');


const catRoute = require('./app/routes/categoriesRoute.js');
const prodRoute = require('./app/routes/productRoute.js');


const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Failed: Database error:"));
db.once('open', () => {
    console.log('Success: Connected to Database');

    app.get('/', (req, res, next) => {
        res.json({ message: "Welcome to Areebah's Marketplace App! " });
    });

    app.use(`${config.uri}/products`, prodRoute);
    app.use(`${config.uri}/categories`, catRoute);
    app.listen(config.port, () => {
        console.log(`Server is running at ${config.port}`);
    });
});
