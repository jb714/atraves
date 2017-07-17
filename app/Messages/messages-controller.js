angular.module('messages-controller', [])

.controller('messages-controller', function($scope, $http) {

  $scope.postMessage = function(){
    if($scope.latitude && $scope.longitude){

      var messageBody = {
        geoId: $scope.latitude.toString() + $scope.longitude.toString(),
        subgeoId: $scope.oppLat.toString() + $scope.oppLon.toString(),
        messageArray: [{
          userName: $scope.userName,
          message: $scope.message,
          time: moment().format('MMMM Do YYYY, h:mm a')
        }]
      }



      $http.post('/messages', messageBody).then(function(input){
        $scope.userName ="";
        $scope.message = "";
      })

      .catch(function(error){
        console.log("error", error);
      })

    } else {
      alert("Please enter coordinates before saving a comment");
    }


  }


})
