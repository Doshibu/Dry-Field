const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const dbURI = 'mongodb://louis:P@ssword1@ds233748.mlab.com:33748/dry-field'
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'twig')
app.get('/', function (req, res) {
  res.render('index.twig')
})

let server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port)
    mongoose.connect(dbURI, {useMongoClient: true})
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI)
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
