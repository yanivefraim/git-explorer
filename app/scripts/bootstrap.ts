declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from './components/repository-issue/repository-issue';
import RepositoryIssues from './components/repository-issues/repository-issues';
import RepositoryEdit from './components/repository-edit/repository-edit';
import GithubService from './services/github-service';

let adapter = new UpgradeAdapter();

angular.module('githubExplorerApp').directive('repositoryIssue', adapter.downgradeNg2Component(RepositoryIssue));

angular.module('githubExplorerApp').directive('repositoryIssues', adapter.downgradeNg2Component(RepositoryIssues));

angular.module('githubExplorerApp').directive('repositoryEdit', adapter.downgradeNg2Component(RepositoryEdit));

adapter.upgradeNg1Provider('dataService');

adapter.addProvider(GithubService);

adapter.bootstrap(document.body, ['githubExplorerApp']);
