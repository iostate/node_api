const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
	noteRoutes(app, db);
	// Other route groups can go here in the future
};

