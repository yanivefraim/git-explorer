import {Component, Input, Inject, OnInit} from 'angular2/core';

@Component({
  selector: 'my-profile',
  templateUrl: 'scripts/components/my-profile/my-profile.html'
})
export default class MyProfile implements OnInit{

  userEvents: Array<any>;
  @Input() profile: any;
  constructor(@Inject('dataService') private dataService) {
    //
  }

  ngOnInit() {
    this.dataService.getAuthenticatedUserEvents(this.profile.login).then((response) => {
      this.userEvents = response.data;
      //console.log('567676576576', this.userEvents[0].created_at)
    });
  }
}
