'use strict';

/**
 * @ngdoc overview
 * @name githubExplorerApp
 * @description
 * # githubExplorerApp
 *
 * Main module of the application.
 */
angular
  .module('githubExplorerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('main', {
        url:'/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('repository', {
        url: '/repository/:login/:fullName',
        templateUrl: 'views/repository-details.html',
        controller: 'ReposirotyDetailsCtrl',
        controllerAs: 'repositoryDetails',
        resolve: {
          repository: function(dataService, $stateParams) {
            return dataService.getRepository($stateParams.login, $stateParams.fullName).then(function(response) {
                return response.data;
            });
          }
        }
      });
  });
