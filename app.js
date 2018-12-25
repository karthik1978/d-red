//app.js
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/productsRoute'); // Imports routes for the products
const mongoose = require('mongoose');

const app = express();
// Set up mongoose connection
let dev_db_url = 'mongodb://localhost:27017/productsDB';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//Web server config
let port = 9090;
app.listen(port, () => {
    console.log(`Server started on port: `+port);
});