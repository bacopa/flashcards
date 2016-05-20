var app = angular.module("flashcards");

app.controller("detailCtrl", function ($scope, $state, flashcardServices) {

	$scope.card;
	var id = $state.params.id

	flashcardServices.getOneCard(id, function (output) {
		$scope.card = output;
	})


	$scope.update = function() {
		var id = $state.params.id;

		if($scope.updatedCard.question.length && $scope.updatedCard.answer.length && $scope.updatedCard.category.length){
			flashcardServices.update($scope.updatedCard, id, function (updatedCard) {
				$scope.card = updatedCard;
			})
		}
	}

	$scope.remove = function() {
		var id = $state.params.id;
		flashcardServices.remove(id, function () {
			console.log("Obj successfully deleted.")
		})
	}
})