const express = require('express')
const Address = require('../model/address')
const _ = require('lodash')

module.exports.list = (req,res) => {
  const {user} = req
  Address.find({user:user._id})
  .then(addressess => {
    res.json(addressess)
  })
  .catch(err => {
    res.send(err)
  })
}
module.exports.create = (req,res) => {
  const {user} = req
  const address = new Address(req.body)
  address.user = user._id
  address.save()
  .then(address => {
    res.json(_.pick(address,['_id','addressType','street','city','phoneNumber','landmark','pinCode']))
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.show = (req,res) => {
  const id = req.params.id
  const {user} = req
  Address.findOne({
    _id:id,
    user:user._id
  })
  .then(address => {
    res.json(_.pick(address, ['_id', 'addressType', 'street', 'city', 'phoneNumber', 'landmark', 'pinCode']))
  })
}

module.exports.update = (req,res) => {
  const id = req.params.id
  const {user} = req
  Address.findOneAndUpdate({
    _id:id,
    user:user._id
  },{$set: req.body},{new:true})
  .then(address => {
    res.json(_.pick(address, ['_id', 'addressType', 'street', 'city', 'phoneNumber', 'landmark', 'pinCode']))
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.destroy = (req,res) => {
  const id = req.params.id
  const {user} = req
  Address.findOneAndDelete({
    _id:id,
    user:user._id
  })
  .then(address => {
    res.json(address)
  })
  .catch(err => {
    res.send(err)
  })
}