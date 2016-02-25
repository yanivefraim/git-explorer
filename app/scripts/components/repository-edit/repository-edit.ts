import {Component, Input, Inject} from 'angular2/core';

@Component({
  selector: 'repository-edit',
  templateUrl: 'scripts/components/repository-edit/repository-edit.html',
})

export default class RepositoryEdit {
  @Input() repository: any;

  constructor(@Inject('dataService') private dataService, @Inject('$location') private $location) {
    //
  }

  editRepository() {
    this.dataService.editRepository(this.repository.full_name, {name: this.repository.name, description: this.repository.description})
      .then(() => {
        var url = `/repository/${this.repository.fullName}/details`;
        this.$location.path(url);
      });
  };
}
