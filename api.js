const express = require('express')
const asyncify = require('express-asyncify')
const { reverseText } = require('./lib/general')

// const api = express.Router()
const api = asyncify(express.Router())

api.use(function(err, req, res, next) {
    console.error(err.stack)

    res.status(500).send({ error: '500 ERROR something happened' })
})

api.get('/iecho', async(req, res, next) => {
    const { text } = req.query

    if (text === undefined) {
        res.status(400).send({ error: 'no text' })
    } else {
        let reversedText = reverseText(text)
        res.json({ text: reversedText })
    }
})

api.get('*', function(req, res) {
    res.status(404).send({ error: '404 NOT FOUND' })
});

module.exports = api