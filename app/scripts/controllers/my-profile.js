'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:MyProfileCtrl
 * @description
 * # MyProfileCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('MyProfileCtrl', function (profile) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.myProfile = profile;
  });
