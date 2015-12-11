'use strict';

describe('Service: linkedin', function () {

  // load the service's module
  beforeEach(module('siteApp'));

  // instantiate service
  var linkedin;
  beforeEach(inject(function (_linkedin_) {
    linkedin = _linkedin_;
  }));

  it('should do something', function () {
    expect(!!linkedin).toBe(true);
  });

});
