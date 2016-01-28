import {Component, Inject} from 'angular2/core';
import GithubService from "../../services/github-service";

@Component({
  selector: 'header',
  templateUrl: 'scripts/components/header/header.html'
})
export default class Header {

  userData: any;
  constructor(@Inject('localStorageService') private localStorageService, @Inject(GithubService) private githubService) {
    if(localStorageService.get('githubKey')) {

      if(!localStorageService.get('userData')) {
        githubService.getAuthenticatedUserData()
        .then(function(response) {
          localStorageService.set('userData', response.json());
          this.userData = localStorageService.get('userData');
        });
      }
    }
    this.userData = localStorageService.get('userData');
  }

  logout = function() {
    this.localStorageService.clearAll();
  };


}
