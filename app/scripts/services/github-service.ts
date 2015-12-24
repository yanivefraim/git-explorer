
import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {PromiseObservable} from 'rxjs/observable/fromPromise';


export default class GithubService {

  constructor( @Inject('dataService') private dataService, @Inject(Http) private http) {
   //
  }

  getIssueComment(owner, name, number) {

    var promise = new Promise((resolve, reject) => {
      this.dataService.getAccessToken('?').then((accesstoken) => {
        var url = `https://api.github.com/repos/${owner}/${name}/issues/${number}/comments${accesstoken}`;
        return this.http.get(url)
          .map(response => response.json())
          .subscribe(data => resolve(data)
          , err => reject(err));
      });
    });
    return Observable.fromPromise(promise);
  }
}
