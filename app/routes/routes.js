var Nerd = require('./models/nerd');

	module.exports = function(app) {

		// server routes ===========================

		// get requests handling
		app.get('/api/nerds', function(req, res) {

			Nerd.find(function(err, nerds) {

				if (err) {
					res.send(err);
				}

				//returns nerds from db in json format
				res.json(nerds);
			});

		});

		//post requests
		// delete requests


		// angular routes ===========================
		// angular handles all other requests
		app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
	}