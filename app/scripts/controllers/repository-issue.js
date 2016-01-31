'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryIssueCtrl
 * @description
 * # RepositoryIssueCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryIssueCtrl', function ($stateParams, $scope, issue, repository, dataService) {

    console.log('issue.number', issue.number);
    $scope.issue = issue;

    var login = repository.full_name.split('/')[0];
    var fullName = repository.full_name.split('/')[1];

    dataService.getIssueComment(login, fullName, issue.number).then(function(response) {
      $scope.comments = response.data;
    });
  });
