var flashcards = require("./../controllers/flashcards.js");


// we will have to require this in the server.js file and pass it app
module.exports = function(app) {

	app.get("/flashcards", function (req, res) {
		flashcards.getAll(req, res);
	});

	app.post("/flashcards", function (req, res) {
		flashcards.create(req, res);
	});

	app.put("/flashcard/:id", function (req, res) {
		flashcards.update(req, res);
	});

	app.delete("/flashcard/:id", function (req, res) {
		flashcards.remove(req, res);
	});

	app.get("/flashcard/:id", function (req, res) {
		flashcards.getOne(req, res);
	})

}