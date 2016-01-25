import {Component, Input} from 'angular2/core';
import {NgClass} from 'angular2/common';
import OrderBy from '../../pipes/order-by/order-by';

@Component({
  selector: 'repository-content',
  templateUrl: 'scripts/components/repository-content/repository-content.html',
  pipes: [OrderBy]
})
export default class RepositoryContent {

  @Input() content: any;
  constructor() {}

}
