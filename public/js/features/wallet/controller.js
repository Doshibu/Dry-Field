const walletElement = $('#wallet')
const defaultMoney = 50

const getLabel = () => walletElement.find('span')

export const getMoney = () => parseInt(getLabel().text() || 0)

export const setMoney = (money) => getLabel().text(getMoney() + money)

setMoney(defaultMoney)
