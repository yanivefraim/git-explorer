import {Component} from 'angular2/core';


@Component({
  selector: 'repository-issue',
  inputs: ['issue', 'comments'],
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">issue: #{{issue.number}}</div>
      <div class="panel-body">
        <p>{{issue.body}}</p>
      </div>
    </div>
    Comments:
    <ul class="list-group">
      <li class="list-group-item" ng-repeat="comment in comments">
      {{comment.body}}
      </li>
    </ul>
  `,
  providers: [],
  directives: [],
  pipes: []
})
export default class RepositoryIssue {

  constructor() {}

}
