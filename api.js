const express = require('express')
const api = express.Router()

api.get('/', function(req, res) {
    res.send('API Toolbox')
})

api.get('/iecho', (req, res) => {
    const { text } = req.query

    res.send('todo reversed text:' + text)
})

module.exports = api