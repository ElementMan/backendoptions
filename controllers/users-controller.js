const User = require('../models/users')


// Signup
const signup = async (req, res, next) => {

  const user  = new User(req.body)

  try {    
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch (err) {
    console.log(err, 'error in sign up')    
    return next(err)
  }  
}
// Login
const login = async (req, res, next) => {
  const { email, password } = req.body
try {
  const user = await User.findByCredentials(email, password)
  
  await console.log('Login Successful')
  res.status(200).send('Login Successful')
} catch (err) {
  console.log(err, 'Login Failed')
  return next(err)  
}
}


exports.login = login
exports.signup = signup