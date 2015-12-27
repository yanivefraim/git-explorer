// 'use strict';

// /**
//  * @ngdoc function
//  * @name githubExplorerApp.controller:RepositoryIssueCtrl
//  * @description
//  * # RepositoryIssueCtrl
//  * Controller of the githubExplorerApp
//  */
// angular.module('githubExplorerApp')
//   .controller('RepositoryIssueCtrl', function ($stateParams, $scope, issue, dataService) {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];

//     console.log('issue.number', issue.number);
//     $scope.issue = issue;

//     dataService.getIssueComment($stateParams.login, $stateParams.fullName, issue.number).then(function(response) {
//       $scope.comments = response.data;
//     });
//   });
