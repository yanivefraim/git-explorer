import {Component, Inject, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'repository-issue',
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">issue: #{{issue.number}}</div>
      <div class="panel-body">
        <p>{{issue.body}}</p>
      </div>
    </div>
    Comments:
    <ul class="list-group">
      <li class="list-group-item" *ngFor="#comment of comments">
        {{comment.body}}
      </li>
    </ul>
  `
})
export default class RepositoryIssue implements OnInit {
  comments: Array<any>;
  @Input() repository: any;
  @Input() issue: any;

  constructor(@Inject('dataService') private dataService) {
    //
  }

  ngOnInit() {
    this.dataService.getIssueComment(this.repository.login, this.repository.fullName, this.issue.number)
    .then((res) => {
      this.comments = res.data;
    });
  }
}
