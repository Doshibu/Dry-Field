// const Score = require('./model')
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

// module.exports = {
//     getAllScore: () => {
//         Score.ScoreModel.find({}, (err, results) => {
//             if (err) {
//                 console.log('error')
//             }
//             console.log(results)
//         })
//     },
//     saveScore: (number, name) => {
//         const toSave = new Score.ScoreModel()
//         toSave.points = number
//         toSave.playerName = name
//         toSave.save(number, (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//             console.log(result)
//         })
//     }
// }
