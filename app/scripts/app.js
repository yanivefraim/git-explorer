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
        templateUrl: 'views/repository.html',
        controller: 'ReposirotyCtrl',
        //controllerAs: 'repository',
        resolve: {
          repository: function(dataService, $stateParams) {
            return dataService.getRepository($stateParams.login, $stateParams.fullName).then(function(response) {
              console.log(response.data);
                return response.data;
            });
          }
        }
      })
      .state('details', {
        parent: 'repository',
        url: '/details',
        templateUrl: 'views/repository-details.html',
        controller: 'RepositoryDetailsCtrl'//,
        //controllerAs: 'repositoryDetails',
        // resolve: {
        //   repository: function(dataService, $stateParams) {
        //     return dataService.getRepository($stateParams.login, $stateParams.fullName).then(function(response) {
        //         console.log(response.data);
        //         return response.data;
        //     });
        //   }
        // }
      })
      .state('contributors', {
        parent: 'repository',
        url: '/contributors',
        templateUrl: 'views/repository-contributors.html',
        controller: 'RepositoryContributorsCtrl',
        //controllerAs: 'repositoryDetails',
        resolve: {
          contributors: function(dataService, $stateParams) {
            return dataService.getContributors($stateParams.login, $stateParams.fullName).then(function(response) {
                console.log(response.data);
                return response.data;
            });
          }
        }
      });

  });
