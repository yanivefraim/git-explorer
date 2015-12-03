'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:ReposirotyDetailsCtrl
 * @description
 * # ReposirotyDetailsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('ReposirotyCtrl', function ($scope, repository) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repository = repository;
  });
