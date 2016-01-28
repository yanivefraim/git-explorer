import {Component, Inject} from 'angular2/core';

@Component({
  selector: 'header',
  templateUrl: 'scripts/components/header/header.html'
})
export default class Header {

  userData: any;
  constructor(@Inject('localStorageService') private localStorageService, @Inject('dataService') dataService) {
    if(localStorageService.get('githubKey')) {

      if(!localStorageService.get('userData')) {
        dataService.getAuthenticatedUserData()
        .then(function(response) {
          localStorageService.set('userData', response.data);
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
