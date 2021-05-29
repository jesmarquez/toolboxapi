const express = require('express')
const asyncify = require('express-asyncify')

// const api = express.Router()
const api = asyncify(express.Router())
api.get('/', async function(req, res) {
    res.send('API Toolbox')
})

api.get('/iecho', async(req, res, next) => {
    const { text } = req.query

    res.json({ text: 'cba' })

})

module.exports = api