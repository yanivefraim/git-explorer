'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:RepositoryDetailsJsCtrl
 * @description
 * # RepositoryDetailsJsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('RepositoryDetailsCtrl', function ($scope, dataService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var isStarred = false;
    var starring = false;
    dataService.isRepositoryStarred($scope.repository.full_name)
    .then(function (response) {
      isStarred = true;
    }, function (response) {
      isStarred = false;
    });

    $scope.star = function () {
      if(starring) {
        return;
      }
      starring = true;
      if (!isStarred) {
        dataService.starRepository($scope.repository.full_name).then(function () {
          isStarred = true;
          starring = false;
        }, function () {
          //isStarred = !isStarred;
        });
      } else {
        dataService.unStarRepository($scope.repository.full_name).then(function () {
          isStarred = false;
          starring = false;
        }, function () {
          //isStarred = !isStarred;
        });
      }
      //isStarred = !isStarred;
    };

    $scope.isRepositoryStarred = function () {
      return isStarred;
    };
    //this.repository = repository;
  });
