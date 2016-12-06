(function () {
  angular
  .module('myApp.filters', [])
  .filter('format', format)
  .filter('users', users)
})();


function format () {
  return function (str) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var times = ["Doesn't Play", 'Overnight(12AM - 5AM)', 'Morning(5AM - 9AM)', 'Day(9AM - 5PM)', 'Night(5PM - 12PM)']
    var output = str.split('-').map(row => row.split(''))
    .map((row, i) => {
      return row.map((el, j) => {
        if(el == 1) return days[i] + ' ' + times[j]
      }).filter(el => el).join(', ')
    }).filter(el => el.length > 0)
    return output
  }
}
function users () {
  return function (arr, user1) {
    return arr.filter(msg => {
      return msg.fromUser == user1 || msg.toUser == user1
    })
  }
}
