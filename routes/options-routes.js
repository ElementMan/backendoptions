const express = require('express')

const optionsController = require('../controllers/options-controller')

const router = express.Router()

router.post('/newoption', [], optionsController.newOption)

module.exports = router