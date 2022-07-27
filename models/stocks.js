const mongoose = require('mongoose')
// const validator= require('validator')

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  companyname: { type: String, required: true },
  costbasis: { type: Number, required: true},
  shares: { type: Number, required: true },
  datepurchased: { type: String, required: false },
  totalcost: { type: Number, required: true }
})

const Stocks = mongoose.model('Stock', stockSchema)
module.exports = Stocks