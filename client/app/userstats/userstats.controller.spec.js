'use strict';

describe('Controller: UserstatsCtrl', function () {

  // load the controller's module
  beforeEach(module('netRankApp'));

  var UserstatsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserstatsCtrl = $controller('UserstatsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
