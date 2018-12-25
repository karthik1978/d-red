'use: strict';

const express = require('express');
const app = express();
var index = require('./routes/index.route')
var retailer = require('./routes/retailer.route')
var products = require('./routes/products.route')
var manufacturer = require('./routes/manufacturer.route')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Set up mongoose connection
let dev_db_url = 'mongodb://localhost:27017/d-redDB';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', index);
app.use('/api/v1/manufacturer', manufacturer);
app.use('/api/v1/retailer', retailer);
app.use('/api/v1/products', products);


app.listen(8080, () => {
  console.log('Server listening on port 8080  =!');
});
