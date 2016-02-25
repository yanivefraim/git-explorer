declare const fetch: any;

import { Http } from 'angular2/http';
import { Injectable, Inject } from 'angular2/core'

@Injectable()
export class GithubService {

  constructor(@Inject('dataService') private dataService, @Inject(Http) private http) {
  }

  getIssueComment(owner, name, number) {
    return this.dataService.getAccessToken('?')
      .then(accesstoken => {
        let url = `https://api.github.com/repos/${owner}/${name}/issues/${number}/comments${accesstoken}`
        return this.http.get(url);
    })
  }

}
