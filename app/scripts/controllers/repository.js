'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:ReposirotyDetailsCtrl
 * @description
 * # ReposirotyDetailsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('ReposirotyCtrl', function ($scope, $location, repository) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repository = repository;

     $scope.isActive = function (viewLocation) {
      console.log($location.path().split('/')[$location.path().split('/').length-1]);
        return viewLocation === $location.path().split('/')[$location.path().split('/').length-1];
    };
  });
