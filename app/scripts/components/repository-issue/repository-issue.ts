import { Component, Input, Inject, OnInit }  from "angular2/core";
import { GithubService } from '../../services/github-service';

@Component({
  selector: 'repository-issue',
  templateUrl: 'scripts/components/repository-issue/repository-issue.html'
})
export class RepositoryIssue implements OnInit {
  @Input() issue;
  @Input() repository;
  comments: any;

  constructor(@Inject(GithubService) private githubService) {

  }

  ngOnInit() {
    let [login, fullName] = this.repository.full_name.split('/');
    this.githubService.getIssueComment(login, fullName, this.issue.number).then(observable => observable.subscribe(data => this.comments = data.json()));
  }
}
