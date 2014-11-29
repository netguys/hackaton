'use strict';
google.load('visualization', '1', {
  packages: ['corechart']
});

//google.setOnLoadCallback(function () {
//  angular.bootstrap(document.body, ['netRankApp']);
//});


angular.module('netRankApp')
  .controller('ChartCtrl', function ($scope, $window, $routeParams) {


    debugger;
    function ChartCtrl() {

      $scope.data = google.visualization.arrayToDataTable([
        ['Element', 'Density', {role: 'style'}],
        ['Copper', 8.94, '#b87333'],
        ['Silver', 10.49, 'silver'],
        ['Gold', 19.30, 'gold'],
        ['Platinum', 21.45, 'color: #e5e4e2']
      ]);

      $scope.options = {
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: '95%'},
        legend: 'none'
      };

      var chart_div = document.getElementById('chart');
      var chart = new google.visualization.ColumnChart(chart_div);

      ////Wait for the chart to finish drawing before calling the getImageURI() method.
      //google.visualization.events.addListener(chart, 'ready', function () {
      //  console.log(chart_div.innerHTML);
      //});


      chart.draw( $scope.data,  $scope.options);

      $scope.message = 'Hello';

      $scope.onSaveButtonClick = function () {
        var doc = new jsPDF(),
          elementHandler = {
            '#ignorePDF': function (element, renderer) {
              return true;
            }
          },
          chartDiv = window.document.getElementById("chart"),
          chart = new google.visualization.ColumnChart(chartDiv);

        google.visualization.events.addListener(chart, 'ready', function () {
          doc.addImage(chart.getImageURI(), 10, 10, 200, 100);
          doc.output('save', 'chart.pdf');
        });
        chart.draw($scope.data, $scope.options);

        //  source = window.document.getElementById("chart");
        //doc.fromHTML(
        //  source,
        //  15,
        //  15,
        //  {
        //    'width': 180, 'elementHandlers': elementHandler
        //  });

      };

      $scope.onDrawChartButtonClick = function () {
      }
    }


    return new ChartCtrl();
  });
