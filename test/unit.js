let chai = require('chai');
let { reverseText } = require('../lib/general')
let assert = chai.assert
let app = require('../server')
let supertest = require('supertest')
const request = supertest(app)
const expect = require("chai").expect;


describe('Testing library:', function() {
    describe('Check reverseText function', function() {
        it('Check the returned value using: assert.equal(value, value', function() {
            result = reverseText('abc')
            assert.equal(result, 'cba')
        })
    })
})

describe('Testing endpoint:', function() {
    it('gets the test endpoint', function(done) {

        request
            .get('/api/iecho?text=abc')
            .expect('Content-Type', /json/)
            .expect(200, done);
        /*
        const response = await request.get('/api/iecho')
        done()
        /*
        console.log(response.status)
        console.log('pass')
        expect(response.status).toBe(200)*/

    })
})