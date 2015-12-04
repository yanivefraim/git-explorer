'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryIssueCtrl
 * @description
 * # RepositoryIssueCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryIssueCtrl', function ($scope, issue) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.issue = issue;
  });
