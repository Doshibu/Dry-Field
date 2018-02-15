const fieldElements = $('.field')
fieldElements.each((index, element) => {
  $(element).click((e) => {
    console.log('Field clicked')
  })
})
