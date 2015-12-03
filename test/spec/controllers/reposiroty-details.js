'use strict';

describe('Controller: ReposirotyDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var ReposirotyDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReposirotyDetailsCtrl = $controller('ReposirotyDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReposirotyDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
