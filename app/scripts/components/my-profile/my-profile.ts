import {Component, Input, OnInit, Inject} from "angular2/core";
import {DateParsePipe} from "../../pipes/date-parse";

@Component({
  selector: 'repository-issue',
  templateUrl: 'scripts/components/my-profile/my-profile.html',
  pipes: [DateParsePipe]
})

export default class MyProfile implements OnInit {

  @Input() myProfile:any;
  userEvents: any[];

  constructor (@Inject('dataService') private dataService) {}

  ngOnInit() {
    if (this.myProfile !== null) {
      this.dataService.getAuthenticatedUserEvents(this.myProfile.login).then((response) => {
        this.userEvents = response.data;
      });
    }
  }
}
