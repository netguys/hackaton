'use strict';

angular.module('netRankApp')
  .controller('MainCtrl', function ($scope, $http, socket, rankService) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function () {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {name: $scope.newThing});
      $scope.newThing = '';
    };

    $scope.deleteThing = function (thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    var myLatlng = new google.maps.LatLng(38.7804937, -83.4954343),
      myOptions = {
        zoom: 4,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(document.getElementById("map_div"), myOptions);

    rankService.getAllData().then(function (a) {

      $scope.data = a.data.result.records;

    }).then(function () {
      var markers = [],
        i;

      for (i = 0; i < $scope.data.length; i++) {
        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng($scope.data[i].LATITUDE, $scope.data[i].LONGITUD),
            map: map,
            title: $scope.data[i].INSTNM
          })
        )
      }
      return markers;
    }).then(function (markers) {
      var markerCluster = new MarkerClusterer(map, markers, {
        gridSize: 20,
        maxZoom: 18,
        zoomOnClick: true
      });

      for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];

        (function (marker) {
          google.maps.event.addListener(marker, 'click', function () {
            //show info window
          });
        })(marker)

      }
    });

    var input = document.getElementById('pac-input');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(input);
    google.maps.event.addListener(searchBox, 'places_changed', function () {
      var places = searchBox.getPlaces(),
        bounds = new google.maps.LatLngBounds();

      if (places.length == 0) {
        return;
      }

      bounds.extend(places[0].geometry.location);
      map.fitBounds(bounds);
    });

  });
