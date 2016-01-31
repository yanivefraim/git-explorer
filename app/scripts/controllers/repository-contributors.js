'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryContributorsJsCtrl
 * @description
 * # RepositoryContributorsJsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryContributorsCtrl', function ($scope, contributors) {
    $scope.contributors = contributors;
  });
