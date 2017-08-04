angular.module('Geolocator', [])


.factory('Geolocator', ['$http', '$window', '$q', function($http, $window, $q) {


  var coordsOpposite = function(lat, lng){

    //If lat/lng are falsy, oppLng/oppLat default to zero and are returned
    var oppLng = 0, oppLat = 0;


    if(lat && lng){
      lat = parseInt(lat);
      lng = parseInt(lng);

      lat > 0 ? oppLat = parseInt("-" + lat) : oppLat = lat / -1;

      //if longitude is positive subtract 180 (if longitude is 0 or negative add 180)
      lng > 0 ? oppLng = lng - 180 : oppLng = lng + 180;
    }

    return {
      oppLat: oppLat,
      oppLng: oppLng
    }

  }

  var searchByAddress = function(query){
    var address = query;
    var API_KEY = 'AIzaSyD8TIStKWe6gYH-KnB7YS9KsLYv-xNQmC4';
    /*var address  = query.split('');
    var lat, lng;
    Format the query string for API contact
    for(var i = 0; i < address.length; i++){
      if(address[i] === " "){
        address[i] = "+";
      }
    }

    address = address.join('');
    console.log("Parsed address:", address);*/
    return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
    address + '&key=' + API_KEY);

  }

  var getCurrentPosition = function() {

    var deferred = $q.defer();

    if(!$window.navigator.geolocation){

      deferred.reject('Looks like Geolocation isn\'t supported by your browser')
    }

    else {
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
      coordsOpposite: coordsOpposite,
      searchByAddress: searchByAddress,
      getCurrentPosition: getCurrentPosition,
    }

  }])
