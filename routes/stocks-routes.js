const express = require('express')

const stocksController = require('../controllers/stocks-controller')

const router = express.Router()

router.post('/stockpurchase', [], stocksController.stockPurchase)

module.exports = router