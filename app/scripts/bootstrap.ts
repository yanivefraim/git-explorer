declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from './components/repository-issue/repository-issue';
import GithubService from './services/github-service';
import {HTTP_PROVIDERS} from 'angular2/http';



let adapter = new UpgradeAdapter();

angular
.module('githubExplorerApp')
.directive('repositoryIssue', adapter.downgradeNg2Component(RepositoryIssue));

adapter.addProvider(GithubService);

adapter.addProvider(HTTP_PROVIDERS);

adapter.upgradeNg1Provider('dataService');

adapter.bootstrap(document.body, ['githubExplorerApp']);
