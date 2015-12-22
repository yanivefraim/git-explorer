declare var angular: any;

import {UpgradeAdapter} from 'angular2/upgrade';

let adapter = new UpgradeAdapter();
console.log(adapter);
angular.element(document).ready(function() {
  //console.log('UpgradeAdapter', UpgradeAdapter);
  angular.bootstrap(document, ['githubExplorerApp']);
});

