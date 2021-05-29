let chai = require('chai');
let { reverseText } = require('../lib/general')
let assert = chai.assert
let app = require('../server')
let supertest = require('supertest')
const request = supertest(app)
const expect = require("chai").expect;


describe('Testing library:', function() {
    describe('Check reverseText function', function() {
        it('should return a reversed text', function() {
            result = reverseText('abcdefg')
            assert.equal(result, 'gfedcba')
        })
    })
})

describe('Testing endpoint:', function() {
    describe('GET /api/iecho success', function() {
        it('get respond 200 with JSON', function(done) {

            request
                .get('/api/iecho?text=abc')
                .expect('Content-Type', /json/)
                .expect(200, done)


            /*
            const response = await request.get('/api/iecho')
            done()
            /*
            console.log(response.status)
            console.log('pass')
            expect(response.status).toBe(200)*/

        })
    })

    describe('Check endpoint GET /api/iecho not found', function() {
        it('get respond 400', function(done) {
            request
                .get('/api/iecho')
                .expect('Content-Type', /json/)
                .expect(400, done)
        })
    })
})