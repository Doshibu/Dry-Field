import { querySelectors, getElement } from 'querySelector'

const CiternModel = require('./model')

const citern = getElement(querySelectors.mainCitern)
citern.onclick = function () {
    alert(CiternModel.Citern)
}
module.exports = {
    // fillCitern: (id, nbLitre) => {
    //     return new Promise((resolve, reject) => {
    //       console.log('fill citern')
    //        CiternModel.findByIdAndUpdate(id, nbLitre, (err, result) => {
    //            if (err) {
    //                reject(err)
    //            }
    //            resolve(result)
    //        })
    //     })
    // },
    // stateCitern: (id) => {
    //     console.log('check citern')
    //     CiternModel.find({'_id': id})
    // }
}
