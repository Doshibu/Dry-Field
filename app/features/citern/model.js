// imports
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// model
// let citernSchema = new mongoose.Schema({
//    capactiy: {type: Number, min: 0, max: 100, required: true},
//    consumtion: {type: Number, min: 1, max: 2, required: true}, // per second
//    fieldNumber: {type: Number, min: 0, max: 3, required: true} // 0 for host
// })

// const Citern = mongoose.model('citern', citernSchema)

class Citern {
    constructor (isGlobal, consumtion, id, maxCapactity) {
        this.maxCapacity = maxCapactity // the global citern as a maxCapacity greater than non global citern
        this.consumtion = consumtion
        this.id = id
        this.isGlobal = isGlobal
    }
}

module.exports = {
    Citern
}
