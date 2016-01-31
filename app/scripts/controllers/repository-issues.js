'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryIssuesCtrl
 * @description
 * # RepositoryIssuesCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryIssuesCtrl', function ($scope, issues) {
    $scope.issues = issues;
  });
