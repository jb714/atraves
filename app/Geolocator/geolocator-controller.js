angular.module("geolocator-controller", [])


.controller("geolocator-controller", function($scope, Geolocator){

  //Need all factories to pass their coordinate data here, as we need coordinates to initialize the rest of application
  $scope.latitude = "40";
  $scope.longitude = "50";
  $scope.oppLat = "";
  $scope.oppLon = "";

  //Function that calculates opposite coordinates
  $scope.coordsOpposite = function() {
    var obj  = Geolocator.coordsOpposite($scope.latitude,$scope.longitude);
    $scope.oppLat = obj.oppLat;
    $scope.oppLon = obj.oppLon;
  }

  //Geolocation function. Runs if button on view is clicked.
  $scope.getCurrentPosition = function() {

    Geolocator.getCurrentPosition().then(

      function(promise){

        $scope.latitude = parseInt(promise.coords.latitude);
        $scope.longitude = parseInt(promise.coords.longitude);

        $scope.coordsOpposite();


      },
      function(err){
        return err;
      }
    );
  }

})
