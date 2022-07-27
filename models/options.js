const mongoose = require('mongoose')


const optionSchema = new mongoose.Schema({
  typeoption: { type: String, required: true },
  symbol: { type: String, required: true },
  stockquote: { type: Number, required: false},
  costbasis: { type: Number, required: true},
  contracts: { type: Number, required: true },
  datepurchased: { type: String, required: true },
  expirationdate: { type: String, required: true },
  totalcostrevenue: { type: Number, required: true }
})

const Options = mongoose.model('Option', optionSchema)
module.exports = Options