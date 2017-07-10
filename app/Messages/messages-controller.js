angular.module('messages-controller', [])

.controller('messages-controller', function($scope, $http) {

  $scope.postMessage = function(){
    if($scope.latitude && $scope.longitude){

      var messageBody = {
        id: $scope.latitude.toString() + $scope.longitude.toString(),
        subId: $scope.oppLat.toString() + $scope.oppLon.toString(),
        userName: $scope.userName,
        message: $scope.message
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


    // .success(function(data, status, headers, config){
    //   console.log("Success!!")
    // })
    //
    // .error(function(data,status){
    //   console.log("Error");
    // })
  }
  //$http.post to mongo endpoint
})
