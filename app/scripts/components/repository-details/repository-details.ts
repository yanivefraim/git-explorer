import {Component, Input, Inject, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import GithubService from '../../services/github-service';

@Component({
  selector: 'repository-details',
  template: `<div class="panel panel-primary">
    <div class="panel-heading" style="position: relative;">{{repository.name}}
      <span class="repo-actions">
        <a style="padding-top: 2px;text-decoration: none;" class="glyphicon glyphicon-edit" *ngIf="isOwner()" href="#/repository/{{repository.full_name.split('/')[0]}}/{{repository.full_name.split('/')[1]}}/edit"></a>
        <span *ngIf="isOwner()" style="margin-top: -4px" class="badge">admin</span>
        <span *ngIf="userdata" [ngClass]="{'glyphicon-star-empty': !isStarred, 'glyphicon-star': isStarred}" class="glyphicon repo-star" (click)="star($event)"></span>
      </span>
    </div>
    <div class="panel-body" style="position: relative;">
      <div>{{repository.description}}</div>
      <div>URL: <a href="{{repository.html_url}}">{{repository.html_url}}</a></div>

    </div>
  </div>
`
})
export default class RepositoryDetails implements OnInit {
  private isStarring: boolean = false;
  private isStarred: boolean = false;
  @Input() repository: any;
  @Input() userdata: any;
  constructor( @Inject(GithubService) private githubService ) {
    //
  }

  ngOnInit() {
    this.isStarring = true;
    this.githubService.isRepositoryStarred(this.repository.full_name)
    .then((response) => {
      this.isStarred = true;
      this.isStarring = false;
    }, (response) => {
      this.isStarred = false;
      this.isStarring = false;
    });
  }

  isRepositoryStarred() {
    return this.isStarred;
  }

  isOwner(): boolean {
    return this.repository.permissions.admin;
  }

  star($event) {
    if (this.isStarring) {
      return;
    }
    this.isStarring = true;
    if (!this.isStarred) {
      this.githubService.starRepository(this.repository.full_name).then(() => {
        this.isStarred = !this.isStarred;
        this.isStarring = false;
      });
    } else {
      this.githubService.unStarRepository(this.repository.full_name).then(() => {
        this.isStarred = !this.isStarred;
        this.isStarring = false;
      });
    }
  }
}
