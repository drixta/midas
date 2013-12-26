(function(){

	var clickerModule	= angular.module('clickerModule',[])
	clickerModule.controller('PointsCtrl', ['$scope', function($scope){
		$scope.gpm = 0;
		$scope.totalPoints = 0;
		$scope.addPoints = function(point){
			$scope.totalPoints = $scope.totalPoints + point;
			return true;
		};
		$scope.increaseGPM = function(point){
			$scope.gpm = $scope.gpm + point;
			console.log($scope.gpm);
			return true;
		};
		$scope.gainPassiveIncome = function(){
			setTimeout(function(){
				$scope.addPoints($scope.gpm/240);
				$scope.gainPassiveIncome();
				$scope.$apply();
				console.log($scope.totalPoints);
			}, 250);
		};
		$scope.gainPassiveIncome();
	}]);


	var rootModule = angular.module('rootModule',['clickerModule'])
	

})();