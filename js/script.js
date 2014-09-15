// create the module and name it scotchApp
var psrApp = angular.module('psrApp', []);

// create the controller and inject Angular's $scope
psrApp.controller('mainController', function($scope) {

	// create a message to display in our view
  $scope.message = 'Yo dudez!';
});

