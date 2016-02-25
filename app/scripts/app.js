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
        .setStorageType('localStorage')
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
         authKey: function(dataService) {
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
              console.log('repository route', response.data);
                return response.data;
            });
          }
        }
      })
      .state('details', {
        parent: 'repository',
        url: '/details',
        templateUrl: 'views/repository-details.html',
        controller: 'RepositoryDetailsCtrl'
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
      })
      .state('issues', {
        parent: 'repository',
        url: '/issues',
        templateUrl: 'views/repository-issues.html',
        controller: 'RepositoryIssuesCtrl',
        //controllerAs: 'repositoryDetails',
        resolve: {
          issues: function(dataService, $stateParams) {
            return dataService.getIssues($stateParams.login, $stateParams.fullName).then(function(response) {
                console.log(response.data);
                return response.data;
            });
          }
        }
      })
      .state('issue', {
        parent: 'repository',
        url: '/issue/:number',
        template: '<repository-issue [issue]="vm.issue" [repository]="vm.repository"></repository-issue>',
        controller: function (issue, repository) {
          this.issue = issue;
          this.repository = repository;
        },
        controllerAs: 'vm',
        resolve: {
          issue: function(dataService, $stateParams) {
            return dataService.getIssue($stateParams.login, $stateParams.fullName, $stateParams.number).then(function(response) {
                return response.data;
            });
          }
        }
      })
      .state('edit', {
        parent: 'repository',
        url: '/edit',
        templateUrl: 'views/repository-edit.html',
        controller: 'RepositoryEditCtrl'
      })
      .state('my-profile', {
        url: '/my-profile',
        templateUrl: 'views/my-profile.html',
        controller: 'MyProfileCtrl',
        resolve: {
          profile: function(dataService) {
            return dataService.getAuthenticatedUSerProfile().then(function(response) {
                console.log(response.data);
                return response.data;
            }, function() {
              return null;
            });
          }
        }
      });
  });
