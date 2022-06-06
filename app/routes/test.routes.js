const express = require('express')
const router = express.Router()

const tests = require('../services/tests.service')

router.get('/test', tests.getTest)
router.post('/test', tests.addTest)

module.exports = router