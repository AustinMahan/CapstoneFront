(function () {
  angular
.module('myApp.services', [])
.service('socketService', socketService)

socketService.$inject = ['$http', '$rootScope']

function socketService($http, $rootScope) {
  var vm = this
  var socket = io('http://galvanize-student-apis.herokuapp.com/');
  socket.on('gdating.messages', function (data) {
    if (data._members.indexOf($rootScope.user._id) > -1) {
      $rootScope.user.chatting = [data]
    }
    vm.getChats($rootScope.user._id)
    .then(data => {
       data.data.data.forEach(item => {
        if (item._members.indexOf($rootScope.chatMember) > -1 && item._members.indexOf($rootScope.chatMember) > -1) {
          $rootScope.$emit('newChat', item.messages)
        }
      })
    })
    .then(() => $('.chat').scrollTop(99999))
  });

  vm.sendMessage = function (text, memberId, id) {
    var payload = {
      _recipient: memberId,
      content: text
    }
    return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/members/' + id + '/conversations', payload)
  }

  vm.getChats = function (id) {
    return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members/' + id + '/conversations')
  }
}
})();
