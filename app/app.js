var atraves = angular.module('atraves', ['uiGmapgoogle-maps','geolocator-controller','maps-controller', 'comments-controller', 'Geolocator'])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyD8TIStKWe6gYH-KnB7YS9KsLYv-xNQmC4',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
