import { setMoney, getMoney } from '../wallet/controller'

const mainCiternElement = $('#main-citern')
const citernCapacity = 40
const refill = 10
const refillCost = 10

const getLabel = () => mainCiternElement.find('span')

export const getWater = () => parseInt(getLabel().text() || 0)

export const setWater = (water) => getLabel().text(getWater() + water)

setWater(citernCapacity / 2)

function buyWater () {
  const money = getMoney()
  const water = getWater()
  if (money > refillCost && water < citernCapacity) {
    setMoney(-refillCost) && setWater(refill)
  }
}

mainCiternElement.click((e) => buyWater())
