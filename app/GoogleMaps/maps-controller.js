angular.module("maps-controller", [])


.controller("maps-controller", ['$scope', 'Geolocator', function($scope, Geolocator){

  $scope.map = {
    center: {latitude: $scope.latitude, longitude: $scope.longitude},
    zoom: 9
  };

  $scope.map2 = {
    center: {latitude: + $scope.oppLat, longitude: $scope.oppLon},
    zoom: 9
  };

}])
