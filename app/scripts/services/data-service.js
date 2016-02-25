'use strict';

/**
 * @ngdoc service
 * @name githubExplorerApp.dataService
 * @description
 * # dataService
 * Service in the githubExplorerApp.
 */
angular.module('githubExplorerApp')
  .service('dataService', function ($http, $interpolate, localStorageService, $q) {
    var dataService = {};
    var githubKey = '';

    dataService.getAccessToken = function (prefix) {
      return this.getGitHubToken()
      .then(function(response) {
        var githubKey = response;
        var accesstoken = '';
        if(githubKey !== '' && githubKey !== null) {
          accesstoken = prefix + 'access_token=' + githubKey;
        }
        return accesstoken;
      });
    };

    dataService.searchRepositories = function(searchExp) {
      return this.getAccessToken('&')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/search/repositories?q={{search}}+language:js+language:typescript&sort=stars&order=desc'+accesstoken)({search: searchExp});
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      }).then(function(response) {
        return response.data;
      });
    };

    dataService.getRepository = function (owner, name) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}'+ accesstoken)({owner: owner, name: name });
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      });
    };

    dataService.editRepository = function (fullName, repositoryData) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{fullName}}'+ accesstoken)({fullName: fullName });
        return $http({
          url: url,
          method: 'PATCH',
          data: repositoryData,
          cache: true
        });
      });
    };

    dataService.getContributors = function (owner, name) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contributors'+accesstoken)({owner: owner, name: name });
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      });
    };

    dataService.getAuthenticatedUserEvents = function (userName) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/users/{{userName}}/events'+accesstoken)({userName: userName});
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      });
    };

    dataService.getContent = function (owner, name) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contents'+accesstoken)({owner: owner, name: name });
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      });
    };

    dataService.getIssues = function (owner, name) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/issues'+accesstoken)({owner: owner, name: name });
        return $http({
          url: url,
          method: 'GET'
        });
      });
    };

    dataService.getIssue = function (owner, name, number) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/issues/'+number + accesstoken)({owner: owner, name: name });
        return $http({
          url: url,
          method: 'GET'
        });
      });
    };

    dataService.getAuthenticatedUserData = function () {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user' + accesstoken;
        return $http({
          url: url,
          method: 'GET'
        });
      });
    };

    dataService.getAuthenticatedUserStarredRepositories = function () {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user/starred' + accesstoken;
        return $http({
          url: url,
          method: 'GET',
          cache: true
        });
      });
    };

    dataService.isRepositoryStarred = function (fullName) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user/starred/' + fullName + accesstoken;
        return $http({
          url: url,
          method: 'GET'
        });
      });
    };

    dataService.starRepository = function (fullName) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user/starred/' + fullName + accesstoken;
        return $http({
          url: url,
          // headers: {
          //   "Content-Length": 0
          // },
          method: 'PUT'
        });
      });
    };

    dataService.unStarRepository = function (fullName) {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user/starred/' + fullName + accesstoken;
        return $http({
          url: url,
          method: 'DELETE'
        });
      });
    };

    dataService.getAuthenticatedUSerProfile = function () {
      return this.getAccessToken('?')
      .then(function(accesstoken) {
        var url = 'https://api.github.com/user' + accesstoken;
        return $http({
          url: url,
          method: 'GET'
        });
      });
    };

    dataService.getGitHubToken = function () { //TODO: refactor the whole process
      var deferred = $q.defer();
      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }

      if(!localStorageService.get('githubKey')) {
        var code = getParameterByName('code');
        if(code) {
          $.ajax({
            url: 'http://localhost:9999/authenticate/' + code, //TODO: move this to Heroku!!
            method: 'GET'
          }).then(function(response) {
            localStorageService.set('githubKey', response.token);
            githubKey = localStorageService.get('githubKey');
            window.location = './';
            deferred.resolve(githubKey);
          });
        } else {
          deferred.resolve('');
        }

      } else {
        githubKey = localStorageService.get('githubKey');

        deferred.resolve(githubKey);
      }

      return deferred.promise;
    }
    return dataService;
  });
