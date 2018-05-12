// Routes are wrapped in a function. 

// Takes express instance and database as argument
module.exports = function(app, db) {
	// Create a POST request in order to create a note
	app.post('/notes', (req, res) => {

		//log the body of the response
		console.log(req.body)

		// Response will be 'hello'
		res.send('Hello')
	});
};
// You can now export this through index.js