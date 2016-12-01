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

    $stateProvider.state(homeState)
    $stateProvider.state(psnState)
    $stateProvider.state(setupState)
    $stateProvider.state(friendState)
  }

})();
