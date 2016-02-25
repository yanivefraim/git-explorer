import {Component, Input, OnInit, Inject} from "angular2/core";

@Component({
   selector: 'repository-issue',
   templateUrl: 'scripts/components/repository-issue/repository-issue.html'
 })

 export default class RepositoryIssue implements OnInit {

   comments: Array<any>;
   @Input() issue:any;
   @Input() repository: any;
   constructor (@Inject('dataService') private dataService) {}

   ngOnInit() {
     let [login, fullName] = this.repository.full_name.split('/');

     this.dataService.getIssueComment(login, fullName, this.issue.number).then((response) => {
       this.comments = response.data;
     });
   }
 }
