'use strict';

describe('Controller: RepositoryContentCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var RepositoryContentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoryContentCtrl = $controller('RepositoryContentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoryContentCtrl.awesomeThings.length).toBe(3);
  });
});
