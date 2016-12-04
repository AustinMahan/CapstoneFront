// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'myApp.config',
      'myApp.filters',
      'myApp.components.main',
      'myApp.components.psn',
      'myApp.components.setup',
      'myApp.components.friend'
    ]);

})();