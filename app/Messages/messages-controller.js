angular.module('messages-controller', [])

.controller('messages-controller', function($scope, $http) {

  $scope.postMessage = function(){
    if($scope.latitude && $scope.longitude){

      var messageBody = {
        id: $scope.latitude.toString() + $scope.longitude.toString(),
        subId: $scope.oppLat.toString() + $scope.oppLon.toString(),
        messages: [{
          userName: $scope.userName,
          text: $scope.message,
          time: moment().format('MMMM Do YYYY, h:mm a')
        }]
      }


      $http.post('/messages', messageBody).then(function(input){
        $scope.userName ="";
        $scope.message = "";
        console.log(input);
      })

      .catch(function(error){
        console.log("error", error);
      })

    } else {
      alert("Please enter coordinates before saving a comment");
    }


  }

})
