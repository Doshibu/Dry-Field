const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const dbURI = 'mongodb://louis:password@ds233748.mlab.com:33748/dry-field'
const app = express()
// const ScoreController = require('./app/features/score/controller')

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI)
    // ScoreController.saveScore(10, 'louis')
    // ScoreController.getAllScore()
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})
mongoose.connect(dbURI)

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'twig')
app.set('views', path.join(__dirname, '/app/views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/app', express.static(path.join(__dirname, 'app')))

app.get('/', (req, res) => {
    res.render('index.twig')
})

const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port)
})
