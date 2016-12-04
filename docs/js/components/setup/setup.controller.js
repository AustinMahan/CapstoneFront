(function() {

  'use strict';

  angular
    .module('myApp.components.setup', [])
    .controller('setupController', setupController);

  setupController.$inject = ['$http', '$rootScope', '$location'];

  function setupController($http, $rootScope, $location) {
    /*jshint validthis: true */
    var vm = this
    vm.greeting = 'Hello World!';
    if (!$rootScope.gameSetup) $location.path("/")
    vm.gameSetup = $rootScope.gameSetup

    vm.times = [[false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]]

    vm.saveTimes = function () {
      var times = vm.times.map(arr => arr.map(el => el ? 1 : 0).join('')).join('-')
      $http({
        method: 'POST',
        url: 'https://obscure-hamlet-56226.herokuapp.com/psn/' + $rootScope.user,
        data: {user: $rootScope.user, game: $rootScope.gameSetup, times: times},
        headers: {'Content-Type': 'application/json'}
      })
      .then(data => {
        $location.path('/psn')
      })
    }
  }

})();
