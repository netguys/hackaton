'use strict';

angular.module('netRankApp')
  .controller('UserstatsCtrl', function ($scope, localStorageService) {
    $scope.message = "Hello!";

    $scope.data = {};
    $scope.data.favs = localStorageService.get("favourites");

    $scope.removeFromFavourites = function(item) {
      var index;
      $scope.data.favs.forEach(function(el, ind){
        if (item.INSTNM === el.INSTNM) {
          index = ind;
        }
      });
      $scope.data.favs.splice(index, 1)
      localStorageService.set("favourites", $scope.data.favs);
    }
  });
