// In order to retrieve a note with an ID, we must declare an 
// ObjectID from mongodb
var ObjectID = require('mongodb').ObjectID;

// Routes are wrapped in a function. 
// const db = db.collection('notes');
// Takes express instance and database as argument
module.exports = function(app, db) {
	// Test URL for get request: localhost:8000/notes/5af6f86b59554e601023d4e9
	// Get request for a particular note
	app.get('/notes/:id', (req, res) => {
		// receive ID from GET request in URL
		const id = req.params.id;
		const details = { '_id': new ObjectID(id)};
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occurred during your GET request'});
			} else {
				console.log(item);
				res.send(item);
			}
		});
	});
	
	// Create a POST request in order to create a note
	app.post('/notes', (req, res) => {
		const note = { text: req.body.body, title: req.body.title };
		db.collection('notes').insert(note, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred'});
			} else {
				console.log(result.ops[0]);
				res.send(result.ops[0]);
			}
		});
	});

	// DELETE REQUEST
	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occurred'});
			} else {
				res.send('Note ' + id + ' deleted');
			}
		});
	});
};
// You can now export this through index.js