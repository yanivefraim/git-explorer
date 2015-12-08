'use strict';

describe('Controller: MyProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('githubExplorerApp'));

  var MyProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyProfileCtrl = $controller('MyProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyProfileCtrl.awesomeThings.length).toBe(3);
  });
});
