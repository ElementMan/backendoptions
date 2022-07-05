const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const authRoutes = require('./routes/auth-routes')
const stocksRoutes = require('./routes/stocks-routes')
// const foodRoutes = require('./routes/food-routes')



// mongoose.set('useNewUrlParser', true); // BodyParser replacement?
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next()
})


// app.use('/food', foodRoutes)
app.use('/stocks', stocksRoutes)

app.use('/', authRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hleo8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {useNewUrlParser: true, useUnifiedTopology: true}
).then (() => {
  app.listen(process.env.PORT || 5000,
    () => {
      console.log('Listening on port:', process.env.PORT)
    })
}).catch(err => console.log(err))

