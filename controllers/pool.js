// Controller voor de team page
AMSTERDAMFRISBEE.controller('poolController', ['$scope', '$routeParams', 'model_tournament', 'model_globals', '$window',  function($scope, $routeParams, model_tournament, model_globals, $window){

	console.log("> Start pool controller");

	$scope.poolId = $routeParams.id;

	Hammer(document.getElementById("container")).on("swipeleft", function() {
		$window.history.back();
	});

	// Pool information
	var temp = model_tournament.getFromLocal("TournamentPoolInfomation_"+$scope.poolId);
	if(temp != false){ $scope.poolInformation = temp;}

	model_tournament.getTournamentPoolInfomation($scope.poolId).then(function(response){
		$scope.poolInformation = response;
	},function(){
		console.log("- Laden niet gelukt");
	});

	// TournamentPoolGames
	var temp = model_tournament.getFromLocal("TournamentPoolGames_"+$scope.poolId);
	if(temp != false){ $scope.games = temp.objects; }

	model_tournament.getTournamentPoolGames($scope.poolId).then(function(response){
		console.log(response.objects);
		$scope.games = response.objects;
	},function(){
		console.log("- Laden niet gelukt");
	});


	// Functions
	$scope.betterTime = function(time){
		return moment(time).format("MM-DD-YYYY / HH:mm");
	}

}]);