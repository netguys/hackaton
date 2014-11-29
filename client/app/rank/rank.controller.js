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


      $scope.someFn = me.someFn.bind(me);
    }

    /**
     * some function
     */
    RankCtrl.prototype.someFn = function() {

    };

    return new RankCtrl();
});
