(function() {

  'use strict';

  angular
    .module('myApp.components.psn', [])
    .controller('psnController', psnController);

  psnController.$inject = ['$http', '$rootScope', '$location'];

  function psnController($http, $rootScope, $location) {
    /*jshint validthis: true */
    var vm = this
    vm.greeting = 'Hello World!';
    if (!$rootScope.games) $location.path("/")

    vm.games = $rootScope.games
    vm.allGames = vm.games.reduce((a,b) => a.concat(b))

    vm.findFriends = function (username, gamename, gameImg) {
      $http.get(`https://obscure-hamlet-56226.herokuapp.com/psn/username/${username}/game/${gamename}`)
      .then(data => {
        if (!data.data[0]["time-plays"]) {
          data.data[0].gameImg = gameImg
          $rootScope.gameSetup = data.data[0];
          $location.path("/setup");
        } else {
          $http.get(`https://obscure-hamlet-56226.herokuapp.com/psn/${username}/${gamename}`)
          .then(things => $rootScope.friends = things.data)
            .catch(console.log)
          data.data[0].gameImg = gameImg
          $rootScope.gameSetup = data.data[0];
          $location.path("/friend");
        }
      })
    }

    vm.changeTime = function (username, name, gameImg) {
      $rootScope.gameSetup = {username, name, gameImg}
      $location.path("/setup")
    }

    vm.myInterval = 3000;

  }
  // setTimeout(function() {
  //   $('.carousel').carousel({
  //     interval: 4000
  //   })
  // }, 500)

})();
