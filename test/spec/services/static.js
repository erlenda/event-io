'use strict';

describe('Service: static', function () {

  // load the service's module
  beforeEach(module('eventIoApp'));

  // instantiate service
  var static;
  beforeEach(inject(function (_static_) {
    static = _static_;
  }));

  it('should do something', function () {
    expect(!!static).toBe(true);
  });

});
