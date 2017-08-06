angular.module('messages-controller', [])

.controller('messages-controller', function($scope, $http, MessageOps) {

  $scope.postMessage = function(){
    //Ensure a user has entered a query before allowing them to comment
    if($scope.lat && $scope.lng){

      var messageBody = {
        userName: $scope.userName,
        message: $scope.message,
        time: moment().format('MMMM Do YYYY, h:mm a')
      }

      MessageOps.postMessage(messageBody).then(function(input){
        $scope.userName = "";
        $scope.message = "";
        //Save message and get latest collection
        // $scope.getMessages();
      })

      .catch(function(error){
        console.log("error", error);
      })

    } else {
      alert("Please enter coordinates before saving a comment");
    }

  }

  // $scope.getMessages = function(){
  //
  //   MessageOps.getMessages().then(function(input) {
  //     $scope.messages = input.data;
  //   })
  //
  //   .catch(function(error){
  //     console.log("error", error);
  //   })
  //
  // };
  // $scope.getMessages();
})
