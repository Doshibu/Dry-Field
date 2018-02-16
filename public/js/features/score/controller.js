export function incrementScore () {
  const score = $('#score > div')
  score.text(parseInt(score.text()) + 1)
  $('#score').attr('style', 'opacity: 1')
}

export const getScore = () => parseInt($('#score > div').text())
