// imports
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// model
let fieldSchema = new mongoose.Schema({
    percentage: {type: Number}, // 100 : field is ready
    hasWater: {type: Boolean},
    consumtion: {type: Number} // litre per second
})

const Filed = mongoose.model('field', fieldSchema)

module.exports = {
    Filed
}
