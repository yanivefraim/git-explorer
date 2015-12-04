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
    var accesstoken1 = '';
    var accesstoken2 = '';

    dataService.searchRepositories = function(searchExp) {
      var url = $interpolate('https://api.github.com/search/repositories?q={{search}}+language:js+language:typescript&sort=stars&order=desc'+accesstoken1)({search: searchExp});
      return $http({
        url: url,
        method: 'GET',
        cache: true
      }).then(function(response) {
        return response.data;
      });

    };

    dataService.getRepository = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}'+ accesstoken2)({owner: owner, name: name });
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    };

    dataService.getContributors = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contributors'+accesstoken2)({owner: owner, name: name });
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    };

    dataService.getContent = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contents'+accesstoken2)({owner: owner, name: name });
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    };

    dataService.getGitHubToken = function () {
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

            if (githubKey) {
              accesstoken1 += "&access_token=" + githubKey;
              accesstoken2 += "?access_token=" + githubKey;
            }
            deferred.resolve();
          });
        } else {
          deferred.resolve();
        }

      } else {
        githubKey = localStorageService.get('githubKey');

        if (githubKey) {
          accesstoken1 += "&access_token=" + githubKey;
          accesstoken2 += "?access_token=" + githubKey;
        }
        deferred.resolve();
      }

      return deferred.promise;
    }
    return dataService;
  });
