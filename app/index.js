import { querySelectors, getElement } from 'querySelector'

const wallet = getElement(querySelectors.wallet)

console.log(wallet)
if (wallet) {
    prompt('Yeah !')
}
