import {Inject} from 'angular2/core';
declare let fetch;
export default class GithubService {

  constructor(@Inject('dataService') public dataService:any) {

  }

  getIssueComment(owner, name, number) {
    return this.dataService.getAccessToken('?')
      .then(function(accesstoken) {
        var url = `https://api.github.com/repos/${owner}/${name}/issues/${number}/comments${accesstoken}`;
        return fetch(url).then(response => response.json());
      });
  }
}