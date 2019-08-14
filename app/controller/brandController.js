const express = require('express')
const Brands = require('../model/brands')

module.exports.list = (req,res) => {
    Brands.find()
    .then((brand)=>{
        res.json(brand)
    })
    .catch((err) =>{
        res.send(err)
    })
}
module.exports.create = (req,res) => {
    const body = req.body
    const brands = new Brands(body)
    brands.save()
    .then((brand) => {
        res.json(brand)
    })
    .catch((err) => {
        res.send(err)
    })
}