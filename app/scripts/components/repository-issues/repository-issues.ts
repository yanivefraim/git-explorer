import {Component, Input, Inject, OnInit} from 'angular2/core';
import GithubService from '../../services/github-service';

@Component({
	selector: 'repository-issues',
	template: 
	`
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
export default class RepositoryIssues implements OnInit {
	@Input() issues :any;
	@Input() repository: any;
	comments = [];

	constructor(@Inject(GithubService) private githubRepository) {}
	ngOnInit() {}
}
