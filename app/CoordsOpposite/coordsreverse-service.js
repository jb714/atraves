angular.module('CoordsOpposite', [])

.factory('CoordsOpposite', function() {

  var coordsOpposite = function(lon){
    var revLon;
    //if longitude is positive subtract 180
    if(lon > 0){
      revLon = lon - 180;
    }
    //else (if longitude is 0 or negative) add 180
    else {
      revLon = lon + 180;
    }
    //latitude remains the same
    return revLon;
  }

  return{
    coordsOpposite: coordsOpposite
  }

})
