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
    vm.signupPsn = function (username, password) {
      $http.post('http://localhost:3000/psn/signup', {username, password})
      .then(console.log)
    }
  }

})();
