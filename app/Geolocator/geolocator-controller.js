angular.module("geolocator-controller", [])


.controller("geolocator-controller", function($scope, $http, Geolocator){

  //Need all factories to pass their coordinate data here, as we need coordinates to initialize the rest of application
  $scope.lat = "";
  $scope.lng = "";
  $scope.oppLat = "";
  $scope.oppLng = "";
  $scope.city = "";

  //Function that calculates opposite coordinates
  $scope.coordsOpposite = function() {
    var oppCoords  = Geolocator.coordsOpposite($scope.lat,$scope.lng);
    $scope.oppLat = oppCoords.oppLat;
    $scope.oppLng = oppCoords.oppLng;
  }

  $scope.searchByAddress = function(){
    var coords = Geolocator.searchByAddress($scope.city);
  }

  //Geolocation function. Runs if button on view is clicked.
  $scope.getCurrentPosition = function() {

    Geolocator.getCurrentPosition().then(

      function(promise){

        $scope.lat = parseInt(promise.coords.latitude);
        $scope.lng = parseInt(promise.coords.longitude);

        $scope.coordsOpposite();

      },
      function(err){
        return err;
      }
    );
  }


})
