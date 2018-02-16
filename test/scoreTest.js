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
    db.once('open', () => done())
        .on('error', (error) => {
            console.warn('Error : ', error)
        })
})

after((done) => {
    db.collections.scores.drop()
    done()
})

describe('Score controller', () => {
    // const score = new ScoreController()
    describe('#saveScore', () => {
        it('should save a score', function (done) {
            const req = {
                playerName: 'louis',
                points: 1000
            }
            const res = {
                status: function (responseStatus) {
                    assert.equal(responseStatus, 201)
                    return this
                },
                send: (score) => {
                    expect(score.playerName).toEqual('louis')
                    done()
                }
            }
            ScoreController.saveScore(req, res)
        })
    })
    describe('#getAllScore', () => {
        it('should get a list of all score', function (done) {
            const res = {
                status: function (responseStatus) {
                    assert.equal(responseStatus, 201)
                    return this
                },
                send: function (score) {
                    expect(score.length).toBeGreaterThan(0)
                    done()
                }
            }

            ScoreController.getAllScore(res)
        })
    })
})
