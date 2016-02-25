import {Component, Input} from 'angular2/core';

@Component({
  selector: 'repository-issues',
  templateUrl: 'scripts/components/repository-issues/repository-issues.html',
})

export default class RepositoryIssues {
  @Input() issues: any;
  @Input() repository: any;

  constructor() {
    //
  }
}
