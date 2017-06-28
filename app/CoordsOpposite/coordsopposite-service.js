angular.module('CoordsOpposite', [])

.factory('CoordsOpposite', function() {

  var coordsOpposite = function(lon){
    var revLon;
    lon = parseInt(lon);
    //if longitude is positive subtract 180 (if longitude is 0 or negative add 180)
    lon > 0 ? revLon = lon - 180 : revLon = lon + 180
    //latitude remains the same
    console.log(revLon)
    return revLon;
  }

  return{
    coordsOpposite: coordsOpposite
  }

})
