angular.module('mainApp.controller',[])
.controller('mainC',['$scope','$getLocation',function($scope,$getLocation){
}])
.controller('mainCtrl',[
	'$scope'					,
	'$sce'						,
	'$getLocation'		,
	'$getDataContents',
	'$rootScope'			,
function(
	$scope					,
	$sce						,
	$getLocation		,
	$getDataContents,
	$rootScope
){
	$scope.data = $getDataContents;
	$getLocation.cLocator('index');
	$scope.dTs = function(content) {
		return $sce.trustAsHtml(content);
	}
}]);
