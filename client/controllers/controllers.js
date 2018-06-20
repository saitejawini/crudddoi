myApp.controller('DeviceController', function ($scope, $route, $routeParams, $http) {
	$scope.getDevice = function () {
		$http.get('/api/Device/').then(function (response) {
			$scope.devices = response.data;
		});
	};
	$scope.showDevice = function () {
		var id = $routeParams.id;
		$http.get('/api/Device/' + id).then(function (response) {
			$scope.device = response.data;
		});
	};
	$scope.addDevice = function () {

		$http.post('/api/Device/', $scope.device).then(function (response) {

			window.location.href = '#/Device';
		});
	};
	$scope.updateDevice = function () {
		var id = $routeParams.id;
		$http.put('/api/Device/' + id, $scope.device).then(function (response) {

			window.location.href = '#/Device';
		});
	};
	$scope.deleteDevice = function (id) {
		var id = id;
		$http.delete('/api/Device/' + id).then(function (response) {
			$route.reload();
		});
	};

});
