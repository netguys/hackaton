'use strict';

describe('Service: rankService', function () {

  // load the service's module
  beforeEach(module('netRankApp'));

  // instantiate service
  var rankService;
  beforeEach(inject(function (_rankService_) {
    rankService = _rankService_;
  }));

  it('should do something', function () {
    expect(!!rankService).toBe(true);
  });

});
