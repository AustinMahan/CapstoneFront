(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($stateProvider) {
    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    }
    var psnState = {
      name: 'psn',
      url: '/psn',
      templateUrl: 'js/components/psn/psn.view.html',
      controller: 'psnController',
      controllerAs: 'psnCtrl'
    }
    var setupState = {
      name: 'setup',
      url: '/setup',
      templateUrl: 'js/components/setup/setup.view.html',
      controller: 'setupController',
      controllerAs: 'setupCtrl'
    }
    var friendState = {
      name: 'friend',
      url: '/friend',
      templateUrl: 'js/components/friend/friend.view.html',
      controller: 'friendController',
      controllerAs: 'friendCtrl'
    }
    var signupState = {
      name: 'signup',
      url: '/signup',
      templateUrl: 'js/components/signup/signup.view.html',
      controller: 'signupController',
      controllerAs: 'signupCtrl'
    }

    var otherwiseState = {
      name: 'otherwise',
      url: "*path",
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    };

    $stateProvider.state(homeState)
    $stateProvider.state(psnState)
    $stateProvider.state(setupState)
    $stateProvider.state(friendState)
    $stateProvider.state(signupState)
    $stateProvider.state(otherwiseState)
  }

})();
