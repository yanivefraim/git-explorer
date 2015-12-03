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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/repository/:login/:fullName/details', {
        templateUrl: 'views/repository-details.html',
        controller: 'ReposirotyDetailsCtrl',
        controllerAs: 'repositoryDetails',
        resolve: {
          repository: function(dataService, $route) {
            return dataService.getRepository($route.current.params.login, $route.current.params.fullName).then(function(response) {
                return response.data;
            });
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
