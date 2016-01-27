import {Component, Input, Inject} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'main',
  templateUrl: 'scripts/components/main/main.html'
})
export default class Main {

  searchKey = new Control();
  items: any;
  recentItems: any;
  constructor(@Inject('dataService') private dataService, @Inject('localStorageService') private localStorageService) {
    this.recentItems = this.localStorageService.get('lastItems');

    this.searchKey.valueChanges
                  .debounceTime(400)
                  .distinctUntilChanged()
                  .subscribe(searchKey => this.dataService.searchRepositories(searchKey).then((response) => {
                    this.items = response.items.slice(0,10);
                    this.localStorageService.set('lastItems', this.items);
                  }));
  }

}
