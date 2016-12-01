(function () {
  angular
  .module('myApp.filters', [])
  .filter('format', format)
})();


function format () {
  return function (str) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var times = [null, 'Overnight(12 - 5)', 'Morning(5 - 9)', 'Day(9 - 5)', 'Night(5 - 12)']
    var output = str.split('-').map(row => row.split(''))
    .map((row, i) => {
      return row.map((el, j) => {
        if(el == 1) return days[i] + ' ' + times[j]
      }).filter(el => el).join()
    })
    return output
  }
}
