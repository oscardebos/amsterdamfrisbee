// Controller voor het sliden van de page
(function () {

	'use strict';
	
	// Controller voor de homepage
	AMSTERDAMFRISBEE.controller('slideController', ['$scope', 'model_page_slide',  function($scope, model_page_slide){

		console.log("> Start slide controller");
		
		$scope.pageSlideStyle = function(){
			console.log(model_page_slide.getSlideStyle());
			return model_page_slide.getSlideStyle();
		}

	}]);

})();