const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

// Allows response's to not be undefined?? Look into what this does later
app.use(bodyParser.urlencoded({extended: true}));

//Wrap the app configuration with the MongoClient
// Unsure what the new URL parser is.. 
MongoClient.connect(db.url, {useNewUrlParser: true}, (err, database) => {
	if (err) return console.log(err)

	mdb = database.db("infostore")
	// Make sure to add the database name and not collection name
	// db = database.db("infostore")

	// import the routes for use here in server.js 
	// before listening to the port
	require('./app/routes')(app, mdb); // no DB yet so we pass in an empty object
	app.listen(port, () => {
		console.log('Now live on port ' + port);
	});	
})
