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
    'ui.router',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('githubExplorer')
        .setStorageType('sessionStorage')
        .setNotify(true, true)
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('main', {
        url:'/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          githubToken: function (dataService) {
            return dataService.getGitHubToken();
          }
        }
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
      })
      .state('content', {
        parent: 'repository',
        url: '/content',
        templateUrl: 'views/repository-content.html',
        controller: 'RepositoryContentCtrl',
        //controllerAs: 'repositoryDetails',
        resolve: {
          content: function(dataService, $stateParams) {
            return dataService.getContent($stateParams.login, $stateParams.fullName).then(function(response) {
                console.log(response.data);
                return response.data;
            });
          }
        }
      });

  });
