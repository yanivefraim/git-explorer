declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from './components/repository-issue/repository-issue';
import GithubService from './services/github-service';

let adapter = new UpgradeAdapter();

angular
.module('githubExplorerApp')
.directive('repositoryIssue', adapter.downgradeNg2Component(RepositoryIssue));

adapter.addProvider(GithubService);

adapter.upgradeNg1Provider('dataService');

adapter.bootstrap(document.body, ['githubExplorerApp']);
