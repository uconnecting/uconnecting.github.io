// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var psrApp = angular.module('psrApp', ['ngRoute']);

	// configure our routes
psrApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/schedule', {
            templateUrl: 'partials/schedule.html',
            controller: 'scheduleController'
        })
        .otherwise({ redirectTo: '/' });
});

	// create the controller and inject Angular's $scope
	psrApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	psrApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	psrApp.controller('scheduleController', function($scope) {
		$scope.message = 'These sessions are SWEET';
	});
