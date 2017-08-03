angular.module("maps-controller", [])


.controller("maps-controller", ['$scope', 'Geolocator',  function($scope, Geolocator){

  //Have maps ready for initialization of directives
  $scope.map = {
    center: {latitude: $scope.lat, longitude: $scope.lng},
    zoom: 9
  };

  $scope.map2 = {
    center: {latitude: $scope.oppLat, longitude: $scope.oppLng},
    zoom: 4
  };

  //Markers may not be needed..
  $scope.marker = {
    id: 0, coords: {latitude: $scope.lat, longitude: $scope.lng}
  }

  $scope.marker2 = {
    id: 1,coords: {latitude: $scope.oppLat,longitude: $scope.oppLng}
  }


  //Watch for changes to lat and lng values on scope
  $scope.$watchGroup(['lat', 'lng'], function(){
    //the scope has changed, so we need to fire coordsOpposite again
    $scope.coordsOpposite();

    $scope.map = {
      center: {latitude: $scope.lat, longitude: $scope.lng},
      zoom: 9
    };
    $scope.map2 = {
      center: {latitude: $scope.oppLat, longitude: $scope.oppLng},
      zoom: 4
    };

    //Markers may not be needed..
    $scope.marker = {
      id: 0, coords: {latitude: $scope.lat, longitude: $scope.lng}
    }

    $scope.marker2 = {
      id: 1,coords: {latitude: $scope.oppLat,longitude: $scope.oppLng}
    }

  }, true)


}])
