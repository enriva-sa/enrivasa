angular.module('mainApp.controllerCostumers',[])
.controller('costumersCtrl',['$scope','$sce','$getLocation','$getDataContents',function($scope,$sce,$getLocation,$getDataContents){
	$scope.data = $getDataContents;
	console.log($scope.data);
	$getLocation.cLocator('costumers');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
