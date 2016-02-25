import {Component, Input, Inject, OnInit} from 'angular2/core';
import GithubService from '../../services/github-service';

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
	@Input() issue :any;
	@Input() repository: any;

	comments = [];
	constructor(@Inject(GithubService) private githubRepository) {}

	ngOnInit() {
		let login = this.repository.full_name.split('/')[0];
		let fullName = this.repository.full_name.split('/')[1];

		this.githubRepository.getIssueComment(login, fullName, this.issue.number).then((response) => {
			this.comments = response;
		});
	}
}
