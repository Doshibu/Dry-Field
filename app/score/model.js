 const mongoose = require('mongoose')

 const scoreSchema = mongoose.Schema({
   points: {type: Number},
   playerName: {type: String}
 })

 const ScoreModel = mongoose.model('scores', scoreSchema)

 module.exports = { ScoreModel }
