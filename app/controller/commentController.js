const express = require('express')
const Comment = require('../model/comment')
const _ = require('lodash')

module.exports.list = (req,res) => {
  const reviewId = req.query.reviewId
  Comment.find({
    review:reviewId
  }).populate('review', ['_id','title']).populate('user', ['_id', 'userName'])
  .then(comments => {
    res.json(comments)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports.create = (req,res) => {
  // const {user} = req
  // const reviewId = req.query.reviewId
  const comment = new Comment(req.body)
  // comment.user = user._id
  // comment.review = reviewId
  comment.save()
  .then(comment => {
    res.send(_.pick(comment,['_id', 'body', 'review', 'isLike', 'user']))
  })
  .catch(err => {
    res.send(err)
  })
}