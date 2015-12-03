'use strict';

describe('Controller: RepositoryContributorsJsCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var RepositoryContributorsJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryContributorsJsCtrl = $controller('RepositoryContributorsJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryContributorsJsCtrl.awesomeThings.length).toBe(3);
  });
});
