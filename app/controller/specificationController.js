const express = require('express')
const Specification = require('../model/specification')

module.exports.list = (req,res) => {
	Specification.find()
	.then(specifications => {
		res.json(specifications)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports.create = (req,res) => {
	const specification = new Specification(req.body)
	specification.save()
	.then(specification => {
		res.json(specification)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports.show = (req,res) => {
	const id = req.params.id
	Specification.findById(id)
	.then(specification => {
		res.json(specification)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports.update = (req,res) => {
	const id = req.params.id
	Specification.findByIdAndUpdate(id,{$set:req.body},{new:true})
	.then(specification => {
		res.json(specification)
	})
	.catch(err => {
		res.send(err)
	})
}

module.exports.destroy = (req,res) => {
	const id = req.params.id
	Specification.findByIdAndDelete(id)
	.then(specification => {
		res.json(specification)
	})
	.catch(err => {
		res.send(err)
	})
}