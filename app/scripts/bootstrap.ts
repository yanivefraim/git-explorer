declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from "./components/repository-issue/repository-issue";
import RepositoryIssues from "./components/repository-issues/repository-issues";
import MyProfile from "./components/my-profile/my-profile";

let adapter = new UpgradeAdapter();

angular.module('githubExplorerApp').directive('repositoryIssue', adapter.downgradeNg2Component(RepositoryIssue));
angular.module('githubExplorerApp').directive('repositoryIssues', adapter.downgradeNg2Component(RepositoryIssues));
angular.module('githubExplorerApp').directive('myProfile', adapter.downgradeNg2Component(MyProfile));

adapter.upgradeNg1Provider('dataService');

adapter.bootstrap(document.body, ['githubExplorerApp']);
