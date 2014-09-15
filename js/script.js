// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var psrApp = angular.module('psrApp', ['ngRoute']);

	// configure our routes
	psrApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	psrApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	psrApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	psrApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
