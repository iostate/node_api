const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));

// import the routes for use here in server.js 
// before listening to the port
require('./app/routes')(app, {}); // no DB yet so we pass in an empty object
app.listen(port, () => {
	console.log('Now live on port ' + port);
});

