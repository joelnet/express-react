const config = require('config')
const express = require('express')
const router = express.Router()

router.use(express.static(config.get('server.public')))

module.exports = {
  router
}
