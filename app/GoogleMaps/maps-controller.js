angular.module("maps-controller", [])


.controller("maps-controller", ['$scope', 'Geolocator',  function($scope, Geolocator){

  //Have maps ready for initialization of directives
    $scope.map = {
      center: {latitude: $scope.latitude, longitude: $scope.longitude},
      zoom: 9
    };

    $scope.map2 = {
      center: {latitude: $scope.oppLat, longitude: $scope.oppLon},
      zoom: 9
    };

    //Markers may not be needed..
    // $scope.marker = {
    //   id: 0, coords: {latitude: $scope.latitude, longitude: $scope.longitude}
    // }
    //
    // $scope.marker2 = {
    //   id: 1,coords: {latitude: $scope.oppLat,longitude: $scope.oppLon}
    // }


  //Watch for changes to latitude and longitude values on scope
  $scope.$watchGroup(['latitude', 'longitude'], function(){
    //the scope has changed, so we need to fire coordsOpposite again
    $scope.coordsOpposite();

    $scope.map = {
      center: {latitude: $scope.latitude, longitude: $scope.longitude},
      zoom: 9
    };
    $scope.map2 = {
      center: {latitude: $scope.oppLat, longitude: $scope.oppLon},
      zoom: 9
    };

    //Markers may not be needed..
    // $scope.marker = {
    //   id: 0, coords: {latitude: $scope.latitude, longitude: $scope.longitude}
    // }
    //
    // $scope.marker2 = {
    //   id: 1,coords: {latitude: $scope.oppLat,longitude: $scope.oppLon}
    // }

  }, true)


}])
