
import {Inject, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {toPromise} from 'rxjs/operator/toPromise';


@Injectable()
export default class GithubService {

  constructor(@Inject('dataService') private dataService, @Inject(Http) private http) {
   //
  }

  getIssueComment(owner, name, number) {
    return this.getAccessToken('?').then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}/issues/${number}/comments${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  }

  isRepositoryStarred(fullName) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/user/starred/${fullName}${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  }

  starRepository(fullName) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/user/starred/${fullName}${accesstoken}`;
      return toPromise.call(this.http.put(url));
    });
  }

  unStarRepository(fullName) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/user/starred/${fullName}${accesstoken}`;
      return toPromise.call(this.http.delete(url));
    });
  }

  editRepository(fullName, repositoryData) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${fullName}${accesstoken}`;
      return toPromise.call(this.http.patch(url, JSON.stringify(repositoryData)));
    });
  }

  searchRepositories(searchExp) {
    var promise = new Promise((resolve, reject) => {
      this.getAccessToken('&').then((accesstoken) => {
        var url = `https://api.github.com/search/repositories?q=${searchExp}+language:js+language:typescript&sort=stars&order=desc${accesstoken}`;
        return this.http.get(url)
          .map(response => response.json())
          .subscribe(data => resolve(data)
          , err => reject(err));
      });
    });
    return Observable.fromPromise(promise);
  }

  getAuthenticatedUserEvents(userName) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/users/${userName}/events${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getAuthenticatedUserData() {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/user${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getRepository(owner, name) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getContributors(owner, name) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}/contributors${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getContent(owner, name) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}/contents${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getAuthenticatedUSerProfile() {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/user${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getIssues(owner, name) {
    return this.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}/issues${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getIssue(owner, name, number) {
    return this.dataService.getAccessToken('?')
    .then((accesstoken) => {
      var url = `https://api.github.com/repos/${owner}/${name}/issues/${number}${accesstoken}`;
      return toPromise.call(this.http.get(url));
    });
  };

  getAccessToken(prefix) {
    return this.getGitHubToken()
    .then((response:any) => {
      //TODO: fix this!!
      response = response.replace('"', '');
      response = response.replace('"', '');
      var githubKey = response;
      var accesstoken = '';
      if(githubKey !== '' && githubKey !== null) {
        accesstoken = prefix + 'access_token=' + githubKey;
      }
      return accesstoken;
    });
  };

  getGitHubToken() { //TODO: refactor the whole process

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var promise = new Promise((resolve, reject) => {

      if(!localStorage.getItem('githubExplorer.githubKey')) {
        var code = getParameterByName('code');
        if(code) {
          let url = `http://localhost:9999/authenticate/${code}`;
          toPromise.call(this.http.get(url)
            .map((response: any) => response.json())
            .subscribe(data => {
              localStorage.setItem('githubExplorer.githubKey', data.token);
              resolve(data.token);
            }));
        } else {
          //deferred.resolve('');
          resolve('');
        }

      } else {
        let githubKey = localStorage.getItem('githubExplorer.githubKey');
        resolve(githubKey);
      }
    });
    return promise;
  };
}
