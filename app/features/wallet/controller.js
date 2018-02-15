// import { querySelectors } from '../../querySelectors'

const walletElement = $('#wallet')
walletElement.click((e) => {
  console.log('Wallet clicked')
})

var el = document.getElementById('wallet')
el.addEventListener('click', () => {
  console.log('ok')
}, false)
