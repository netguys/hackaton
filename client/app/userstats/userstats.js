'use strict';

angular.module('netRankApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('userstats', {
        url: '/userstats',
        templateUrl: 'app/userstats/userstats.html',
        controller: 'UserstatsCtrl'
      });
  });