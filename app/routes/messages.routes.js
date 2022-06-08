const express = require('express')
const router = express.Router()

const messages = require('../services/messages.service')

router.get('/messages', messages.getMessages)
router.post('/messages/add/message', messages.addMessage)

module.exports = router