import {Injectable, Inject} from 'angular2/core';

declare let fetch: any;

@Injectable()
export default class GithubService {
  constructor(@Inject('dataService') private dataService) {}

  getIssueComment(owner, name, number) {
    return this.dataService.getAccessToken('?')
      .then((accesstoken) => {
        let url = `https://api.github.com/repos/${owner}/${name}/issues/${number}/comments${accesstoken}`;
        return fetch(url);
      });
  };
}
