const morgan = require('morgan')
const express = require('express')
const router = express.Router()

router.use(morgan('dev'))

module.exports = {
  router
}
