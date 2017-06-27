angular.module("geolocator-controller", [])


.controller("geolocator-controller", function($scope, Geolocator){

  $scope.latitude = "";
  $scope.longitude = ""

  $scope.getCurrentPosition = function(){

    Geolocator.getCurrentPosition().then(
      function(promise){
        
        $scope.latitude = parseInt(promise.coords.latitude);
        $scope.longitude = parseInt(promise.coords.longitude);

      },
      function(err){
        return err;
      }
    );

  }

})
