'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryContentCtrl
 * @description
 * # RepositoryContentCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryContentCtrl', function ($scope, content) {
    $scope.content = content;
  });
