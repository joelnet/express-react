const config = require('config')
const express = require('express')
const loggerMiddleware = require('./middlewares/logger.middleware').router
const staticMiddleware = require('./middlewares/static.middleware').router

const middlewares = [loggerMiddleware, staticMiddleware]

const url = `http://localhost:${config.get('port')}`

express()
  .use(middlewares)
  .get('/api/message', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({ message: 'Hello JSON!' }))
  })
  .listen(config.get('port'), () => {
    console.log(`Sachi started.\nRunning on ${url}`)
  })
