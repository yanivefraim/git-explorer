import {Component, Input, Inject, OnInit} from 'angular2/core';
import GithubService from "../../services/github-service";

@Component({
  selector: 'my-profile',
  templateUrl: 'scripts/components/my-profile/my-profile.html'
})
export default class MyProfile implements OnInit{

  userEvents: Array<any>;
  @Input() profile: any;
  constructor(@Inject(GithubService) private githubService) {
    //
  }

  ngOnInit() {
    this.githubService.getAuthenticatedUserEvents(this.profile.login).then((response) => {
      this.userEvents = response.json();
    });
  }
}
