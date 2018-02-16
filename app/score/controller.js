const Score = require('./model')

module.exports = {
    getAllScore: (res) => {
        Score.ScoreModel.find({}, (err, results) => {
            if (err) {
                res.status(202).send(err)
            }
            res.status(201).send(results)
        })
    },
    saveScore: (req, res) => {
        console.log(req.name)
        const toSave = new Score.ScoreModel(req)
        console.log(toSave.playerName)
        toSave.save((err, result) => {
            if (err) {
                res.status(202).send(err)
            }
            console.log(result)
            res.status(201).send(result)
        })
    }
}
