const express = require('express')

const authenticateUser = (req,res,next) => {
  const {user} = req
  console.log(user)
  if(user.isAdmin === true){
    next()
  }else{
    console.log('user is not authenticated', user.userName)
  }
}
module.exports = authenticateUser