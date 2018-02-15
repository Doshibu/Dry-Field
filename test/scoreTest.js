const assert = require('assert')
// const server = require('../server')
const ScoreController = require('../app/score/controller')
const expect = require('expect')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let db
before((done) => {
  mongoose.connect('mongodb://louis:password@ds233748.mlab.com:33748/dry-field')

  db = mongoose.connection
  db
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Error : ', error)
    })
})

after((done) => {
  // db.collections.users.drop()
  done()
})

describe('Score controller', () => {
  // const score = new ScoreController()
  describe('#saveScore', () => {
    it('should save a score', () => {
      const res = {
        status: function (responseStatus) {
          assert.equal(responseStatus, 201)
          return this
        },
        send: function (score) {
          expect(score.name).toEqual('louis')
        // done()
        }
      }

      ScoreController.saveScore(1000, 'louis')
    })
  })
  describe('#getAllScore', () => {
    it('should get a list of all score', () => {
      const res = {
        status: function (responseStatus) {
          assert.equal(responseStatus, 201)
          return this
        },
        send: function (score) {
          expect(score.length).toBeGreaterThan(1)
        // done()
        }
      }

      ScoreController.getAllScore()
    })
  })
})
