const express = require('express')
const Review = require('../model/review')
const _ = require('lodash')

module.exports.create = (req,res) => {
  // const {user} = req
  // const product = req.query.productId
  const review = new Review(req.body)
  // review.user = user._id
  // review.product = product
  review.save()
  .then(review => {
    res.send(_.pick(review, ['_id', 'title', 'body', 'issues', 'rating', 'createdAt', 'user', 'product']))
  })
  .catch(err => {
    res.send(err)
  })
}
module.exports.list = (req,res) => {
  // const productId = req.query.productId
  // console.log(productId)
  Review.find().populate('user',['userName','createdAt']).populate('product',['productName'])
  .then(products => {
    res.json(products)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.show = (req,res) => {
  const id = req.params.id
  Review.findById(id).populate('user', ['userName']).populate('product', ['productName'])
  .then(review => {
    res.send(_.pick(review, ['_id', 'title', 'body', 'issues', 'rating', 'createdAt', 'user', 'product']))
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.update = (req,res) => {
  const {user} = req
  const id = req.params.id
  const productId = req.query.productId
  Review.findOneAndUpdate({
    _id: id,
    user: user._id,
    product: productId
  }, { $set: req.body }, { new: true }).populate('user', ['userName']).populate('product', ['productName'])
  .then(review => {
    res.send(_.pick(review, ['_id', 'title', 'body', 'issues', 'rating', 'createdAt', 'user', 'product']))
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.destroy = (req,res) => {
  const {user} = req
  const id = req.params.id
  const productId = req.query.productId
  Review.findOneAndDelete({
    _id:id,
    user: user._id,
    product: productId
  })
  .then(review => {
    res.send({notice: 'successfully deleted'})
  })
  .catch(err => {
    res.send(err)
  })
}
