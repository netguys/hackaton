'use strict';

angular.module('netRankApp')
  .controller('ChartCtrl', function ($scope, $window) {
    $scope.message = 'Hello';

    $scope.onSaveButtonClick = function () {
      var doc = new jsPDF(),
        elementHandler = {
          '#ignorePDF': function (element, renderer) {
            return true;
          }
        },
        source = window.document.getElementById("chart");
      doc.fromHTML(
        source,
        15,
        15,
        {
          'width': 180, 'elementHandlers': elementHandler
        });

      doc.output('save', 'chart.pdf');
    }
  });
