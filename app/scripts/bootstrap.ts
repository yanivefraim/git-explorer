declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';

let adapter = new UpgradeAdapter();

adapter.bootstrap(document.body, ['githubExplorerApp']);
