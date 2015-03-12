(function() {
	var app = angular.module('app', ['ngRoute']);

	app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'indexController',
                templateUrl: 'angular/views/homepage.html'
            })
            .when('/popularrecipes', {
                controller: 'homepageController',
                templateUrl: 'angular/views/popularrecipes.html'
            })
            .when('/recipes', {
                controller: 'homepageController',
                templateUrl: 'angular/views/recipes.html'
            })
            .when('/recipes/:recipeId', {
                controller: 'homepageController',
                templateUrl: 'angular/views/recipedirections.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());