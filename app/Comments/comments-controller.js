angular.module('comments-controller', [])

.controller('comments-controller', function($scope, $http) {

  $scope.postMessage = function(){
    var messageBody = {
      userName: $scope.userName,
      message: $scope.message
    }
    console.log("username",messageBody.userName)
    console.log("username",messageBody.message)
  }
  //$http.post to mongo endpoint
})
