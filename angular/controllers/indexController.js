(function () {
	var indexController = function ($scope) {
		//start carousel
		function startCarousel () {
			var interval = setInterval(function(){
				$('.right.carousel-control').trigger('click');
			}, 4000);
		}
		startCarousel();
		//slick carousel
		$('.autoplay').slick({
		  autoplay: true,
		  autoplaySpeed: 3000,
		});
	};//end index controller
	//inject
	indexController.$inject = ['$scope'];
	angular.module('app')
		.controller('indexController', indexController);
}());