angular.module('messages-controller', [])

.controller('messages-controller', function($scope, $http) {

  $scope.postMessage = function(){

    var messageBody = {
      userName: $scope.userName,
      message: $scope.message
    }

    $http.post('/messages', messageBody).then(function(input){
      console.log(input);
    })

    .catch(function(error){
      console.log("error", error);
    })

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
