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
    describe('GET /iecho success', function() {
        it('get respond 200 with JSON', function(done) {
            request
                .get('/iecho?text=abc')
                .expect('Content-Type', /json/)
                .expect(200, {
                    text: 'cba'
                }, done)
        })
    })

    describe('Check endpoint GET /iecho not found', function() {
        it('get respond 400', function(done) {
            request
                .get('/iecho')
                .expect('Content-Type', /json/)
                .expect(400, done)
        })
    })

    describe('GET /iecho success palindrome', function() {
        it('get respond 200 with JSON and the palindrome flag', function(done) {
            request
                .get('/iecho?text=asa')
                .expect('Content-Type', /json/)
                .expect(200, {
                    text: 'asa',
                    palindrome: true
                }, done)
        })
    })
})