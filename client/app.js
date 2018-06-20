var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'DeviceController'
		})
		 
		.when('/Device', {
			templateUrl: 'templates/list.html',
			controller: 'DeviceController'
		})
		.when('/Device/create', {
			templateUrl: 'templates/add.html',
			controller: 'DeviceController'
		})
		.when('/Device/:id/update', {
			templateUrl: 'templates/edit.html',
			controller: 'DeviceController'
		})
		.when('/Device/:id/read', {
			templateUrl: 'templates/show.html',
			controller: 'DeviceController'
		});
});
