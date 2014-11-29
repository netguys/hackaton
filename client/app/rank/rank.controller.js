'use strict';

angular.module('netRankApp')
  .controller('RankCtrl', function ($scope, rankService) {

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

      $scope.filterByName = me.filterByName.bind(me);

      rankService.getAllData().then(function(a) {

        $scope.data = a.data.result.records;
      });
    }

    /**
     * some function
     */
    RankCtrl.prototype.filterByName = function() {

    };

    return new RankCtrl();
});
