(function() {

  'use strict';

  angular
    .module('myApp.components.signup', [])
    .controller('signupController', signupController);

  signupController.$inject = ['$http', '$rootScope', '$location'];

  function signupController($http, $rootScope, $location) {
    /*jshint validthis: true */
    var vm = this
    vm.greeting = 'Hello World!';
    vm.signupPsn = function (username, password, confpass, email) {
      vm.error = ''
      if (password == confpass) {
        $http.post('https://obscure-hamlet-56226.herokuapp.com/psn/signup', {username, password, email})
        .then(() => $location.path('/'))
        .catch(() => $('.btn').button('reset'))
      } else {
        vm.error = 'Passwords do not match'
      }
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
