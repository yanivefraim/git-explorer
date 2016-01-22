import {Component, Input, Inject} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
  selector: 'repository-edit',
  template: `<form (ngSubmit)="editRepository()" style="margin: 0 20px;">
    <div class="form-group">
      <label for="name">Repository Name</label>
      <input type="text" name="name" [(ngModel)]="repository.name" class="form-control" id="name" placeholder="Enter repository name">*
    </div>
    <div class="form-group">
      <label for="description">Repository Name</label>
      <textarea name="description" class="form-control" [(ngModel)]="repository.description" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
`
})
export default class RepositoryEdit {

  @Input() repository
  constructor(@Inject('dataService') private dataService) {}

  editRepository() {
    this.dataService.editRepository(this.repository.full_name, {name: this.repository.name, description: this.repository.description})
    .then(() => {
      var url = `/repository/${this.repository.full_name}/details`;
      window.location.hash = url; //TODO: change this to be navigate by button??
    });
  }

}
