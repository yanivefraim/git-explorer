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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('ReposirotyCtrl');

    $scope.isOwner = function(fullName) {
      var filteredArray = $scope.userRepositories.filter(function (repository){
        return repository.full_name === fullName;
      });
      return (filteredArray.length > 0);
    };

    $scope.repository = repository;

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path().split('/')[$location.path().split('/').length-1];
    };

    $scope.userData = localStorageService.get('userData');
    $scope.userRepositories = localStorageService.get('userRepositories');
  });
