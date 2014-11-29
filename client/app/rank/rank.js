'use strict';

angular.module('netRankApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rank', {
        url: '/rank',
        templateUrl: 'app/rank/rank.html',
        controller: 'RankCtrl'
      });
  });