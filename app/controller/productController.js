const express = require('express')
const Product = require('../model/product')
const upload = require('../../storage')

module.exports.list = (req,res) => {
	Product.find()
	.then((products) => {
		res.json(products)
	})
	.catch((err) => {
		res.send(err)
	})
}

module.exports.create = (req,res) => {
	const { user } = req;
	const body = req.body
	let images = [];

	
	upload(req, res, function(error) {
	if (error) {
		res.json({
			msg: error
		});
	} else {
		if (req.files == null) {
			res.status(400).json({
				msg: "Error: No Files Selected"
			});
		} else {
			req.files.forEach(file => {
				images.push(`uploads/${file.filename}`)
			})/*`uploads/${file.filename}`)*/
				res.status('200').json({
					msg: "File Uploaded",
			});
		}
	}})
   console.log(images)
    const product = new Product(body)
    product.user = user._id
    product.images = images
    product.save()
    .then((product) => {
			res.send(product)
    })
    .catch((err) =>{
			res.send(err)
    })
}

module.exports.show = (req,res) => {
	const id = req.params.id
	Product.findById(id)
	.then((product) => {
		res.json(product)
	})
	.catch((err) => {
		res.send(err)
	})
}

module.exports.update = (req,res) => {
	const {user} = req
	const id = req.params.id
	const body = req.body
	Product.findOneAndUpdate({
		_id:id,
		user:user._id
	},{$set: body}, {new: true})
	.then((product) => {
		res.json(product)
	})
	.catch((err) => {
		res.send(err)
	})
}

module.exports.destroy = (req,res) => {
	const {user} = req
	const id =req.params.id
	Product.findOneAndDelete({
	_id:id,
	user:user._id
	})
	.then((product) => {
		res.json(product)
	})
	.catch((err) => {
		res.send(err)
	})
}