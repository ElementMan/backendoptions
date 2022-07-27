const Options = require('../models/options')

const newOption = async (req, res, next) => {
  const { typeoption, symbol, stockquote, contracts, totalcostrevenue, datepurchased, expirationdate } = req.body

  const option = new Options({ typeoption, symbol, stockquote, contracts, totalcostrevenue, datepurchased, expirationdate })

  try {
    await option.save()    
    res.status(201).send({option})
    

  } catch (err) {
    console.log(err)
    return next(err)
  }
}

exports.newOption = newOption