const express = require('express')
const api = express.Router()

api.get('/', function(req, res) {
    res.send('API Toolbox')
})

api.get('/iecho', (req, res) => {
    res.send('todo reversed text:' + req.query.text)
})

module.exports = api