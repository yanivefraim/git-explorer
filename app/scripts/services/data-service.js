'use strict';

/**
 * @ngdoc service
 * @name githubExplorerApp.dataService
 * @description
 * # dataService
 * Service in the githubExplorerApp.
 */
angular.module('githubExplorerApp')
  .service('dataService', function ($http, $interpolate) {
    var dataService = {};
    dataService.searchRepositories = function(searchExp) {
      var url = $interpolate('https://api.github.com/search/repositories?q={{search}}+language:js+language:typescript&sort=stars&order=desc')({search: searchExp});
      return $http({
        url: url,
        method: 'GET',
        cache: true
      }).then(function(response) {
        return response.data;
      });

    };

    dataService.getRepository = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}')({owner: owner, name: name });
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    };

    dataService.getContributors = function (owner, name) {
      var url = $interpolate('https://api.github.com/repos/{{owner}}/{{name}}/contributors')({owner: owner, name: name });
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    };
    return dataService;
  });
