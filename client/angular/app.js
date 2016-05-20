var app = angular.module("flashcards", ["ui.router"]);


app.config(function ($urlRouterProvider, $stateProvider) {

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "/partials/home.html",
		controller: "homeCtrl"
	})
	.state("detail", {
		url: "/flashcard/:id",
		templateUrl: "/partials/detail.html",
		controller: "detailCtrl"
	})
	$urlRouterProvider.otherwise("/");
})