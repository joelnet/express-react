const config = require('config')
const express = require('express')
const loggerMiddleware = require('./middlewares/logger.middleware').router
const staticMiddleware = require('./middlewares/static.middleware').router
const apiMessageController = require('./controllers/api/message').router
const middlewares = [loggerMiddleware, staticMiddleware]

const url = `http://localhost:${config.get('server.port')}`

express()
  .use(middlewares)
  .use(apiMessageController)
  .listen(config.get('server.port'), () => {
    console.log(`Sachi started.\nRunning on ${url}`)
  })
