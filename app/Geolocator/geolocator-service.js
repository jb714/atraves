angular.module('Geolocator', [])


.factory('Geolocator', ['$http', '$window', '$q', function($http, $window, $q) {

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


  var coordsOpposite = function(lat, lon){

    var oppLon = 0, oppLat = 0;

    if(lat && lon){
      lat = parseInt(lat);
      lon = parseInt(lon);
    lat > 0 ? oppLat = parseInt("-" + lat) : oppLat = lat / -1;

    //if longitude is positive subtract 180 (if longitude is 0 or negative add 180)
    lon > 0 ? oppLon = lon - 180 : oppLon = lon + 180
  }

    return {
      oppLat: oppLat,
      oppLon: oppLon
    }

  }

  return {
    getCurrentPosition: getCurrentPosition,
    coordsOpposite: coordsOpposite
    }

}])
