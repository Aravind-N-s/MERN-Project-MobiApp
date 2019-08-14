const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BrandList = new Schema({
    brandName:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Brand = mongoose.model('Brand',BrandList)

module.exports = Brand