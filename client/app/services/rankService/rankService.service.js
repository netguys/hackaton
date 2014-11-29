'use strict';

angular.module('netRankApp')
  .service('rankService', function ($http) {

    function rankService() {
      var me = this;

      this.promice = $http({
        method: "GET",
        url: 'https://inventory.data.gov/api/action/datastore_search',
        headers: {
          "Content-Type" :"application/json"
        },
        params: {
          "resource_id": "38625c3d-5388-4c16-a30f-d105432553a4",
          "limit": 100,
          "fields": "INSTNM, STABBR, LATITUDE, LONGITUD, WEBADDR"
        }
      }).success(function(awesomeThings) {
        me.data_ = awesomeThings.result.records;
        return awesomeThings.result.records;
      });
    }

    rankService.prototype.getAllData = function() {
      return this.promice;
    };

    return new rankService();

  });
