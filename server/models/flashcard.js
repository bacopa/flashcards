var mongoose = require("mongoose");

var FlashcardSchema = new mongoose.Schema({

	question: String,
	answer: String,
	category: String

});

mongoose.model("Flashcard", FlashcardSchema);