'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:MyProfileCtrl
 * @description
 * # MyProfileCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('MyProfileCtrl', function ($scope, profile, dataService) {
    
    $scope.myProfile = profile;

    if ($scope.myProfile !== null) {
      dataService.getAuthenticatedUserEvents($scope.myProfile.login).then(function(response) {
        $scope.userEvents = response.data;
      });
    }
  });
