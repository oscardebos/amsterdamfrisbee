// Controller voor het menu
(function () {

	'use strict';
	
	AMSTERDAMFRISBEE.controller('menuController', ['$scope', '$rootScope', 'model_loader', 'model_globals', 'model_user', '$location', 'model_page_slide', '$timeout',  function($scope, $rootScope, model_loader, model_globals, model_user, $location, model_page_slide, $timeout){

		console.log("> Start menu controller");

		$timeout(function() {
			console.log("TIME OUT OVER");
			model_page_slide.setSlideStyle("style_from_right");
		}, 2000);
		
		$scope.clientId = model_globals.getAuthKey('clientId');

		$scope.getLoaderClass = function(){
			if(model_loader.getLoadingStatus()){
				return "";
			}else{
				return "hidden";
			}
		}


		$scope.goHome = function(){
			console.log("click to home");
			console.log(model_page_slide);
			model_page_slide.setSlideStyle("style_from_left");
			$location.path("/");
		}


		// is user logged in?
		var temp = model_user.getFromLocal("user");
		if(temp != false){ $scope.user = temp; }

		model_user.getCurrentUser().then(
			function(response){
				$scope.user = response;
			},
			function(){
				console.log("niet gelukt");
			}
		);

		if(model_user.getCurrentUser() == false){
			console.log("geen login");
		}


		$scope.getBreadCrumbs = function(){
			var breadcrumbs = model_globals.getBreadCrumbs();
			if(breadcrumbs){
				return breadcrumbs;
			}else{
				return false;
			}
		}

		

	}]);

})();