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

  //Search by address function. Runs if button on view is clicked
  $scope.searchByAddress = function(){
    Geolocator.searchByAddress($scope.city).then(
      function(promise){
        var coords =  promise.data.results[0].geometry.location;

        $scope.lat = coords.lat;
        $scope.lng = coords.lng;

        $scope.coordsOpposite();
      },
      function(err){
        return err;
      }
    );
  }

  //Geolocation function. Runs if button on view is clicked.
  $scope.getCurrentPosition = function() {
    $scope.lat = "";
    $scope.lng = "";
    $scope.city = "";

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
