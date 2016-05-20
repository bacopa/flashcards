var app = angular.module("flashcards");

app.service("flashcardServices", function ($http) {

	var flashcards = [];

	this.getAll = function (cb) {
		$http.get("/flashcards").success(function (output) {
			cb(output);
		})
	}

	this.create = function (card, cb) {
		$http.post("/flashcards", { card: card }).success(function (output) {
			cb(output);
		})
	}

	this.getOneCard = function (id, cb) {
		$http.get("/flashcard/" + id).success(function (output) {
			cb(output);
		})
	}

	this.update = function (obj, id, cb) {
		console.log(obj, id, cb)
		$http.put("/flashcard/" + id, { card: obj }).success(function (output) {
			cb(output);
		})
	}

	this.remove = function (id, cb) {
		$http.delete("/flashcard/" + id).success(function () {
			cb();
		})
	}
})