'use strict';

describe('Controller: RankCtrl', function () {

  // load the controller's module
  beforeEach(module('netRankApp'));

  var RankCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankCtrl = $controller('RankCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
