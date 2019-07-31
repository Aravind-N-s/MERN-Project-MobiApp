const express = require('express')
const User = require('../model/user')
const authenticationUser = require('../middleware/authenticationUser')
const _ = require('lodash')

module.exports.register = (req, res) => {
  const body = req.body
  const user = new User(body)
  user.save()
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.send(err)
    })
  }

module.exports.login = (req, res) => {
  const body = req.body
  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateToken()
    })
    .then(token => {
      res.send({ token: token })
    })
    .catch(err => {
      res.send(err)
    })
}

module.exports.logout =  (req, res) => {
  const { user, token } = req
  console.log('in router', token)
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(() => {
      res.json({ notice: 'successfully logged out' })
    })
    .catch(err => {
      res.send(err)
    })
}

module.exports.account = (req, res) => {
  const { user } = req
  res.send(_.pick(user, ['_id', 'name', 'email']))
}




