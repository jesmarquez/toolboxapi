const express = require('express')
const api = express.Router()

api.get('/', function(req, res) {
    res.send('API Toolbox')
})

module.exports = api