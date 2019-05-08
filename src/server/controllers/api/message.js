const express = require('express')
const router = express.Router()

router.use('/api/message', (req, res) => {
  res.json({ message: 'Hello JSON' })
})

module.exports = {
  router
}
