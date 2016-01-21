declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from './components/repository-issue/repository-issue';
import RepositoryIssues from './components/repository-issues/repository-issues';
import RepositoryDetails from './components/repository-details/repository-details';
import GithubService from './services/github-service';
import {HTTP_PROVIDERS} from 'angular2/http';



let adapter = new UpgradeAdapter();

angular
.module('githubExplorerApp')
.directive('repositoryIssue', adapter.downgradeNg2Component(RepositoryIssue));

angular
.module('githubExplorerApp')
.directive('repositoryIssues', adapter.downgradeNg2Component(RepositoryIssues));

angular
.module('githubExplorerApp')
.directive('repositoryDetails', adapter.downgradeNg2Component(RepositoryDetails));


adapter.addProvider(GithubService);

adapter.addProvider(HTTP_PROVIDERS);

adapter.upgradeNg1Provider('dataService');

adapter.bootstrap(document.body, ['githubExplorerApp']);
