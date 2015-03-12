(function() {
	var homepageController = function ($scope, recipeFactory, $routeParams, $sce) {
		$scope.trustAsHtml = $sce.trustAsHtml;
		$scope.recipes = recipeFactory;
		$scope.currentRecipe = null;
		var recipeId = $routeParams.recipeId;

		//create a function to handle finding the index for the current recipe view
		var findRecipe = function() {
			var recipes = $scope.recipes;
			var length = recipes.length;
			for (var i = 0; i < length; i++) {
				if (parseInt(recipeId) === recipes[i].id) {
					$scope.currentRecipe = recipes[i];
					break;
				}//end if
			}//end for
		};//end findRecipe
		
		//run findRecipe on view load
		findRecipe();
	};

	homepageController.$inject = ['$scope', 'recipeFactory', '$routeParams', '$sce'];
	angular.module('app')
		.controller('homepageController', homepageController);

}());