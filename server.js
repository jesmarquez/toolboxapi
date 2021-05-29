const http = require('http')
const express = require('express')
const api = require('./api')

const app = express()
const server = http.createServer(app)

const port = 3000
const host = 'localhost'

app.use('/api', api)

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

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