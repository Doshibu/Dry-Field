const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'twig')
app.set('views', path.join(__dirname, 'public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index.twig')
})

const mongoose = require('mongoose')
const dbURI = 'mongodb://louis:password@ds233748.mlab.com:33748/dry-field'
const ScoreController = require('./app/score/controller')
mongoose.connect(dbURI)
const db = mongoose.connection
db.on('connected', () => {
  console.log('Mongoose default connection open to ' + dbURI)
})

db.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
module.exports = {db}

const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port)
})
io.sockets.on('connection', function (pSocket) {
  console.log('Client connected !')
  // Save a score
  pSocket.on('save-score', function (data) {
    console.log('Saving score')
    ScoreController.saveScore({points: data.score, playerName: data.playerName})
  })
})
