'use strict';

angular.module('netRankApp')
  .controller('RankCtrl', function ($scope, rankService, localStorageService) {

    /**
     * controller that show simple rank presentation
     * @constructor
     */
    function RankCtrl() {
      var me = this;

      /**
       * simple message
       * @type {string}
       */
      $scope.message = 'Hello';

      $scope.addToFavourites = me.addToFavourites.bind(me);

      rankService.getAllData().then(function(a) {
        var favs = localStorageService.get("favourites");

        $scope.data = a.data.result.records;

        if (favs) {
          favs.forEach(function (item) {
            $scope.data.find(function (elem) {
              elem.name === item.name;
            }).isFav = true;
          });
        }

      });
    }

    /**
     * some function
     */
    RankCtrl.prototype.addToFavourites = function(item) {
      var favs = localStorageService.get("favourites") || [];
      item.isFav = !item.isFav;

      if (item.isFav) {
        favs.push(item);
        localStorageService.set("favourites", favs);
      }
      else {

      }
    };

    return new RankCtrl();
});
