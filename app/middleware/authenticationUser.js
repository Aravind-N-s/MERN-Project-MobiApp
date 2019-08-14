const User = require('../model/user')

const authenticationUser = (req,res,next) => {
  const token = req.header('x-auth')
  User.findByToken(token)
  .then(user => {
    if(user){
      req.user = user
      req.token = token
      next()
    }else{
      res.status(401).send('token not available')
    }    
  })
  .catch(err => {
      res.status(401).send('invalid user')
  })
} 

module.exports = {authenticationUser}