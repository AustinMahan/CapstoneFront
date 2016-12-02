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

    $http.get('https://obscure-hamlet-56226.herokuapp.com/psn/similar/' + vm.gameSetup.name).then(data => {
      vm.similar_games = data.data.similar_games
    })

    vm.init = function () {
      console.log();
      $rootScope.friends.forEach(friend => vm[friend.name] = {})
    }
    vm.friendReq = function (username, message) {
      $http({
        method: 'POST',
        url: 'https://obscure-hamlet-56226.herokuapp.com/psn/friendReq/' + username,
        data: {email: $rootScope.userEmail, message},
        headers: {'Content-Type': 'application/json'}
      })
      .then(data => {
        if(typeof data.data == 'string') vm[username].message = data.data
        else vm[username].message = "Friend Request Sent"
      })
    }
  }

})();
