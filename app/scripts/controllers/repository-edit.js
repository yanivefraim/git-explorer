'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryEditCtrl
 * @description
 * # RepositoryEditCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryEditCtrl', function ($scope, dataService, $location, $interpolate) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.editRepository = function () {
      dataService.editRepository($scope.repository.full_name, {name: $scope.repository.name, description: $scope.repository.description})
      .then(function () {
        var url = $interpolate('/repository/{{fullName}}/details')({fullName: $scope.repository.full_name});
        $location.path(url);
      });
    };
  });
