import {Component, Input} from 'angular2/core';


@Component({
  selector: 'repository-contributors',
  templateUrl: 'scripts/components/repository-contributors/repository-contributors.html'
})
export default class RepositoryContributors {

  @Input() contributors: any;
  constructor() {}

}
