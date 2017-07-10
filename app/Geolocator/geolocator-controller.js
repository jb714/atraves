angular.module("geolocator-controller", [])


.controller("geolocator-controller", function($scope, Geolocator){

//Need all factories to pass their coordinate data here, as we need coordinates to initialize the rest of application
$scope.latitude = "";
$scope.longitude = "";
$scope.oppLat = "";
$scope.oppLon = "";

  //Workhorse function which will trigger API call
  $scope.coordsOpposite = function() {
    var obj  = Geolocator.coordsOpposite($scope.latitude,$scope.longitude);
    $scope.oppLat = obj.oppLat;
    $scope.oppLon = obj.oppLon;
  }

  //If checkbox is false, then latitude/longitude are empty inputs. If it's true, then invoke getCurrentPosition

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

  //Function that, when a button is clicked, sends whatever coordinates
  //are in the ng-model along to the API, as well as the opposite coordinates.

})
