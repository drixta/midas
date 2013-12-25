(function(){

	var clickerModule	= angular.module('clickerModule',[])
	clickerModule.controller('AddCtrl', ['$scope', function($scope){
		$scope.test = function(){console.log('test');}
	}]);
	clickerModule.controller('TestCtrl', ['$scope', function($scope){
		$scope.yo = function() {console.log('yohoho');}
	}])


	var rootModule = angular.module('rootModule',['clickerModule'])
	

})();