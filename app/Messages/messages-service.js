angular.module('MessageOps', [])


.factory('MessageOps', ['$http', function($http) {

  var postMessage = function(messageBody){
    return $http.post('/messages', messageBody);
  }


  var getMessages = function(){
    return $http.get('/messages');
  }

    return {
      postMessage: postMessage,
      getMessages: getMessages
    }

  }])
