import { getWater, setWater } from '../citern/controller'
import { getMoney, setMoney } from '../wallet/controller'

let isWaitingForHarvest = false
const setIsWaitingForHarvest = (field) => {
  isWaitingForHarvest = !isWaitingForHarvest
  field.toggleClass('completed')
}

const getFieldHarvestPercent = (field) => parseInt(field.find('.field-progress.harvest div').text().slice(0, -1))

const getFieldWater = (field) => parseInt(field.find('.field-progress.water div').text().slice(0, -1))

const fields = $('.field')
fields.each((index, field) => {
  $(field).find('img').click((e) => {
    addWater($(field))
  })

  $(field).find('.btn-harvest').click((e) => {
    if (isWaitingForHarvest === true) {
      setMoney(getMoney() + 40)
      setBarValue($(field).find('.field-progress.water > div'), 0)
      setBarValue($(field).find('.field-progress.harvest > div'), 0)
      setIsWaitingForHarvest($(field))
    }
  })
})

function addWater (field) {
  if (getWater() >= 10 && !isWaitingForHarvest) {
    setWater(getWater() - 10)
    fillWater(field)
  }
}

function fillWater (field) {
  const waterBar = field.find('.field-progress.water > div')
  let width = 10
  const id = setInterval(frame, 10)
  function frame () {
    if (width >= 100) {
      growField(field)
      clearInterval(id)
    } else {
      width++
      setBarValue(waterBar, width)
    }
  }
}

function growField (field) {
  const waterBar = field.find('.field-progress.water > div')
  const harvestBar = field.find('.field-progress.harvest > div')
  const id = setInterval(frame, 250)
  function frame () {
    if (getFieldWater(field) === 0) {
      setBarValue(harvestBar, 0)
      clearInterval(id)
    } else if (getFieldHarvestPercent(field) >= 100) {
      if (!isWaitingForHarvest) {
        setIsWaitingForHarvest(field)
      }
      clearInterval(id)
    } else {
      setBarValue(waterBar, (getFieldWater(field) - 3) >= 0 ? (getFieldWater(field) - 3) : 0)
      setBarValue(harvestBar, getFieldHarvestPercent(field) + 2)
    }
  }
}

function setBarValue (element, value) {
  element.css({'width': value + '%'})
  element.text(value + '%')
}
