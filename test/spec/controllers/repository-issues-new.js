'use strict';

describe('Controller: RepositoryIssuesNewCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var RepositoryIssuesNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryIssuesNewCtrl = $controller('RepositoryIssuesNewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryIssuesNewCtrl.awesomeThings.length).toBe(3);
  });
});
