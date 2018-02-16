const limit = 15
const current = Date.parse(new Date())
const deadline = new Date(current + limit * 60 * 1000)

function timeRemaining (endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date())
  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds}
}

function runClock (id, endtime) {
  var clock = document.getElementById(id)
  function updateClock () {
    var t = timeRemaining(endtime)
    clock.innerHTML = t.minutes + ' : ' + t.seconds
    if (t.total <= 0) {
      stopGame()
      clearInterval(timeinterval)
    }
  }
  updateClock() // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock, 1000)
}
runClock('clockdiv', deadline)

function stopGame () {
    $('#end-game-wrapper').addClass('open')
}
