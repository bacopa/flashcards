var mongoose = require("mongoose");

var Flashcard = mongoose.model("Flashcard");

module.exports = (function () {
	return {
		getAll: function (req, res) {
			console.log("server side getAll!");

			Flashcard.find({}, function (err, data) {
				if(err) {console.log(err)}
				else { 
					console.log(data);
					res.send(data);
				}
			})
		},

		create: function (req, res) {
			
			var newFlashcard = new Flashcard({
				question: req.body.card.question,
				answer: req.body.card.answer,
				category: req.body.card.category
			});
			newFlashcard.save(function (err, data) {
				if(err){console.log("Error while saving flashcard...=(:", err)}
				else {
					
					res.send(data);
				}
			})
		},

		update: function (req, res) {
		console.log("UPDATE req.body", req.body)	
			Flashcard.findByIdAndUpdate(req.params.id, { $set: req.body.card }, { new: true }, function (err, updatedCard) {
					if(err) {
						res.status(400).send(err);
					} else {
						res.send(updatedCard);
					}

			})

		},

		remove: function (req, res) {
			console.log("deleted" + req.params.id)
			Flashcard.findByIdAndRemove(req.params.id, function (err) {
					if(err) {
						res.status(400).send(err);
					} else {
						res.send();
					}
			})
		} ,

		getOne: function (req, res) {
			Flashcard.findById(req.params.id, function (err, found) {
				if(err) {
					res.status(400).send(err);
				} else {
					res.send(found);
				}
			})
		}
	}
})();