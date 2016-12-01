(function() {

  'use strict';

  angular
    .module('myApp.components.friend', [])
    .controller('friendController', friendController);

  friendController.$inject = ['$http', '$rootScope', '$location'];

  function friendController($http, $rootScope, $location) {
    /*jshint validthis: true */
    var vm = this
    vm.greeting = 'Hello World!';
    if (!$rootScope.gameSetup) $location.path("/")
    vm.gameSetup = $rootScope.gameSetup

    $http.get('http://localhost:3000/psn/similar/' + vm.gameSetup.name).then(data => {
      console.log(data);
      vm.similar_games = data.data.similar_games
    })

    vm.friendReq = function (username, password) {
      $http({
        method: 'POST',
        url: 'http://localhost:3000/psn/friendReq/' + username,
        data: {email: $rootScope.userEmail, password},
        headers: {'Content-Type': 'application/json'}
      })
      .then(data => {
        console.log(data);
      })
    }
  }

})();
