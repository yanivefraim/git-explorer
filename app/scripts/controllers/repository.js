'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:ReposirotyDetailsCtrl
 * @description
 * # ReposirotyDetailsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('ReposirotyCtrl', function ($scope, $location, repository, localStorageService) {

    $scope.isOwner = function() {
      return $scope.repository.permissions.admin;
    };

    $scope.repository = repository;

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path().split('/')[$location.path().split('/').length-1];
    };

    $scope.userData = localStorageService.get('userData');
  });
