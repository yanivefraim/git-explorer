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
        template: `<main></main>`,
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
        template: `<repository-details [repository]="vm.repositoryData" [userdata]="vm.userData"></repository-details>`,
        controller: function(repository, localStorageService) {
          this.repositoryData = repository;
          this.userData = localStorageService.get('userData');
          console.log(this.userData);
        },
        controllerAs: 'vm'
      })
      .state('contributors', {
        parent: 'repository',
        url: '/contributors',
        template: `<repository-contributors [contributors]="vm.contributors"></repository-contributors>`,
        controller: function(contributors) {
          this.contributors = contributors;
          console.log(`this.contributors`, this.contributors);
        },
        controllerAs: 'vm',
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
        template: `<repository-content [content]="vm.content"></repository-content>`,
        controller: function(content) {
          this.content = content;
        },
        controllerAs: 'vm',
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
        template: `<repository-issues [issues]="vm.issues" [repository]="vm.repositoryData"></repository-issues>`,
        controller: function(issues, repository) {
          this.issues = issues;
          this.repositoryData = repository;
        },
        controllerAs: 'vm',
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
        template: `<repository-issue [issue]="vm.issue" [repository]="vm.repositoryData"></repository-issue>`,
        // templateUrl: 'views/repository-issue.html',
        controller: function(issue, repository) {
          this.issue = issue;
          this.repositoryData = repository;
        },
        controllerAs: 'vm',
        resolve: {
          issue: function(dataService, $stateParams) {
            return dataService.getIssue($stateParams.login, $stateParams.fullName, $stateParams.number).then(function(response) {
                console.log(response.data);
                return response.data;
            });
          }
        }
      })
      .state('edit', {
        parent: 'repository',
        url: '/edit',
        template: `<repository-edit [repository]="vm.repositoryData"></repository-edit`,
        controller: function(repository) {
          this.repositoryData = repository;
        },
        controllerAs: 'vm'
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
            });
          }
        }
      });
  });
