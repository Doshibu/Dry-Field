const Score = require('./model')

module.exports = {
    getAllScore: () => {
        Score.ScoreModel.find({}, (err, results) => {
            if (err) {
                console.log(err)
            }
            console.log(results)
        })
    },
    saveScore: (number, name) => {
        const toSave = new Score.ScoreModel()
        toSave.points = number
        toSave.playerName = name
        toSave.save((err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })
    }
}
