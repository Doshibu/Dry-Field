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
    const toSave = new Score.ScoreModel(req)
    toSave.save((err, result) => {
      if (err) {
        res.status(202).send(err)
      }
      res.status(201).send(result)
    })
  }
}
