declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';
import RepositoryIssue from './components/repository-issue/repository-issue';
import RepositoryIssues from './components/repository-issues/repository-issues';
import RepositoryDetails from './components/repository-details/repository-details';
import RepositoryEdit from './components/repository-edit/repository-edit';
import RepositoryContributors from './components/repository-contributors/repository-contributors';
import RepositoryContent from './components/repository-content/repository-content';
import Main from './components/main/main';
import Header from './components/header/header';
import MyProfile from './components/my-profile/my-profile';
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

angular
.module('githubExplorerApp')
.directive('repositoryEdit', adapter.downgradeNg2Component(RepositoryEdit));

angular
.module('githubExplorerApp')
.directive('repositoryContributors', adapter.downgradeNg2Component(RepositoryContributors));

angular
.module('githubExplorerApp')
.directive('repositoryContent', adapter.downgradeNg2Component(RepositoryContent));

angular
.module('githubExplorerApp')
.directive('main', adapter.downgradeNg2Component(Main));

angular
.module('githubExplorerApp')
.directive('header', adapter.downgradeNg2Component(Header));

angular
.module('githubExplorerApp')
.directive('myProfile', adapter.downgradeNg2Component(MyProfile));

adapter.addProvider(GithubService);

adapter.addProvider(HTTP_PROVIDERS);

adapter.upgradeNg1Provider('dataService');

adapter.upgradeNg1Provider('localStorageService');

adapter.bootstrap(document.body, ['githubExplorerApp']);
