const http = require('http')
const express = require('express')
const asyncify = require('express-asyncify')
const api = require('./api')

// const app = express()
const app = asyncify(express())
const server = http.createServer(app)

const port = 3000
const host = 'localhost'

app.use('/api', api)

const handleFatalError = (err) => {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

if (!module.parent) {
    process.on('uncaughtException', handleFatalError)
    process.on('unhandledRejection', handleFatalError)

    server.listen(port, host, () => {
        console.log('Server running on port 3000!')
    })
}
module.exports = app