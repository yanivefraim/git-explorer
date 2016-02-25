import {Component, Input, Inject, OnInit} from 'angular2/core';
import GithubService from "../../services/github-service";

@Component({
  selector: 'repository-issue',
  templateUrl: 'scripts/components/repository-issue/repository-issue.html',
})

export default class RepositoryIssue implements OnInit {
  @Input() issue: any;
  @Input() repository: any;
  comments: any[];

  constructor(@Inject(GithubService) private githubService: GithubService) {

  }

  ngOnInit() {
    let [login, fullName] = this.repository.full_name.split('/');

    this.githubService.getIssueComment(login, fullName, this.issue.number)
      .then((response) => response.json())
      .then((response) => this.comments = response);
  }
}
