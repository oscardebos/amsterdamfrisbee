// Controller voor het menu
(function () {

	'use strict';
	
	// Controller voor de homepage
	AMSTERDAMFRISBEE.controller('swipeController', ['$scope', '$window',  function($scope, $window){

		console.log("> Start swipe controller");
		
		$scope.goBack = function(){
			$window.history.back();
		}



	}]);

})();