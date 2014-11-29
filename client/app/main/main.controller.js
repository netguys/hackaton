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

    var myLatlng = new google.maps.LatLng(41.844, -73.5942),
      myOptions = {
        zoom: 3,
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
      for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];

        (function (marker) {
          google.maps.event.addListener(marker, 'click', function () {
            //show info window
          });
        })(marker)

      }
    });

  });
