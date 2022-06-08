const express = require('express')
const router = express.Router()

const messages = require('../services/messages.service')

router.get('/messages', messages.getMessages)
router.post('/messages/add/message', messages.addMessage)
router.put('/messages/edit/:name', messages.editMessage)
router.delete('/messages/delete/:name', messages.deleteMessage)

module.exports = router