// Controller voor het swipen
(function () {

	'use strict';
	
	// Controller voor de homepage
	AMSTERDAMFRISBEE.controller('swipeController', ['$scope', '$window', 'model_page_slide',  function($scope, $window, model_page_slide){

		console.log("> Start swipe controller");
		
		$scope.goBack = function(){
			console.log("Go back in time");
			model_page_slide.setSlideStyle("style_from_left");
			$window.history.back();
		}



	}]);

})();