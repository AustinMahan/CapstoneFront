(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$http', '$rootScope', '$location'];

  function mainController($http, $rootScope, $location) {
    /*jshint validthis: true */
    var username, password;
    var vm = this
    vm.greeting = 'Hello World!';
    vm.user = username = "ViperDriver-21";
    vm.pass = password = 'password'

    vm.signup = function () {
      $location.path('/signup')
    }
    // $http.post('https://obscure-hamlet-56226.herokuapp.com/psn', {username, password})
    // .then(data => {
    //   console.log(data);
    //   if (data.data.error) vm.error = data.data.error
    //   else {
    //     $rootScope.games = split(data.data, 2)
    //     $rootScope.user = data.data[0].fromUser.onlineId
    //     $rootScope.userEmail = username
    //     $location.path('/psn')
    //   }
    // })

    vm.button = true;
    vm.signInPsn = function(username, password){
      vm.error = ''
      $http.post('https://obscure-hamlet-56226.herokuapp.com/psn', {username, password})
      .then(data => {
        if (data.data.error) vm.error = data.data.error
        else {
          $rootScope.games = split(data.data, 2)
          $rootScope.user = data.data[0].fromUser.onlineId
          $rootScope.userEmail = username
          $location.path('/psn')
        }
      })
      .catch(() => {
        vm.error = 'Wrong gamertag/password'
        $('.btn').button('reset')
      })
    }
  }

  setTimeout(function () {
    $('.btn').on('click', function() {
      var $this = $(this);
      $this.button('loading');
      setTimeout(function() {
        $this.button('reset');
      }, 8000);
    });
  }, 500)

})();


function split(arr, num) {
  var output = []
  var length = Math.ceil(arr.length / num)
  for (let i = 0; i < length; i++) {
    output.push(arr.slice(i*num, num*(i+1)))
  }
  return output
}
