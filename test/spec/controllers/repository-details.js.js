'use strict';

describe('Controller: RepositoryDetailsJsCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var RepositoryDetailsJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryDetailsJsCtrl = $controller('RepositoryDetailsJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryDetailsJsCtrl.awesomeThings.length).toBe(3);
  });
});
