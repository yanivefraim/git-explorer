import {Component, Inject, Input, OnInit} from 'angular2/core';
import GithubService from '../../services/github-service';
import {HTTP_PROVIDERS} from 'angular2/http';

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
  constructor( @Inject(GithubService) private githubService ) {
    //
  }

  ngOnInit() {

    let login = this.repository.full_name.split('/')[0];
    let fullName = this.repository.full_name.split('/')[1];
    this.githubService.getIssueComment(login, fullName, this.issue.number)
    .subscribe((res) => {
      this.comments = res;
    });
  }
}
