import {Component, Input} from 'angular2/core';

@Component({
  selector: 'repository-issues',
  template: `
    <span *ngIf="isOwner()">
      <a href="#/repository/{{repository.full_name.split('/')[0]}}/{{repository.full_name.split('/')[1]}}/issues/new">+ new issue</a>
    </span>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>number</th>
          <th>title</th>
          <th>size</th>
        </tr>
      </thead>
      <tbody *ngFor="#item of issues">
        <tr>
          <th scope="row">#{{item.number}}</th>
          <td>
            <a href="#/repository/{{repository.full_name.split('/')[0]}}/{{repository.full_name.split('/')[1]}}/issue/{{item.number}}">{{item.title}}</a>
          </td>
          <td>
            <span class="badge">{{item.state}}</span>
          </td>
        </tr>
      </tbody>
    </table>
`
})
export default class RepositoryIssues {
  @Input() repository: any;
  @Input() issues: any;
  constructor() {}

  isOwner() {
    if (!this.repository.permissions) {
      return false;
    }
    return this.repository.permissions.admin; //TODO: refactor to a service
  }

}
