var app = angular.module("flashcards");

app.controller("homeCtrl", function ($scope, $state, flashcardServices) {

	$scope.cards;
	$scope.card = {};

	flashcardServices.getAll(function (data) {
		$scope.cards = data;
	});

	$scope.create = function () {
		if($scope.card.question.length && $scope.card.answer.length && $scope.card.category.length){

			flashcardServices.create($scope.card, function (data){
				$scope.cards.push(data);
			});
		}
	}
})