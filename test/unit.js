let chai = require('chai');
let { reverseText } = require('../lib/general')
let assert = chai.assert

describe('Testing library:', function() {
    describe('Check reverseText function', function() {
        it('Check the returned value using: assert.equal(value, value', function() {
            result = reverseText('abc')
            assert.equal(result, 'cba')
        })
    })
})