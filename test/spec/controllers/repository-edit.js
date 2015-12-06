'use strict';

describe('Controller: RepositoryEditCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var RepositoryEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryEditCtrl = $controller('RepositoryEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryEditCtrl.awesomeThings.length).toBe(3);
  });
});
