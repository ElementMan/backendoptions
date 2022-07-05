const Stocks = require('../models/stocks')

// const stockPurchase = async (req, res, next) => {
// try {
//   console.log('stock purchased')
// } catch (err) {
//   console.log(err)
//   return next(err)
// }
// }

const stockPurchase = async (req, res, next) => {
  const { symbol, companyname, costbasis, shares, datepurchased } = req.body

  const stock = new Stocks({ symbol, companyname, costbasis, shares, datepurchased })

  try {
    await stock.save()    
    res.status(201).send({stock})
    

  } catch (err) {
    console.log(err)
    return next(err)
  }
}

exports.stockPurchase = stockPurchase