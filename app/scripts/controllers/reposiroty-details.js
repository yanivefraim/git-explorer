'use strict';

/**
 * @ngdoc function
 * @name githubExplorerApp.controller:ReposirotyDetailsCtrl
 * @description
 * # ReposirotyDetailsCtrl
 * Controller of the githubExplorerApp
 */
angular.module('githubExplorerApp')
  .controller('ReposirotyDetailsCtrl', function (repository) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.repository = repository;
    console.log(this.repository);
  });
