angular.module('Geolocator', [])


.factory('Geolocator', ['$http', '$window', '$q', 'CoordsOpposite', function($http, $window, $q, CoordsOpposite) {

  var getCurrentPosition = function() {
    var deferred = $q.defer();

    if(!$window.navigator.geolocation){
      deferred.reject('Looks like Geolocation isn\'t supported by your browser')
    } else {
      $window.navigator.geolocation.getCurrentPosition(
        function(position){
          deferred.resolve(position);
        },
        function(err) {
          deferred.reject(err);
        });
    }

    return deferred.promise;

  }

  return {
    getCurrentPosition: getCurrentPosition
    }

}])
