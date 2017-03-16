module.exports = function(){
	document.write('hello webpack');
	document.write('my name is sfzy');
	var angular = require('angular');
	angular.module('myApp', []).controller('myctrl',function($scope){
		$scope.name='sfyz';
	});
}