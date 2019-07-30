const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName:{
        type: String
    },
    images:[{
        type: String
    }],
    productPrice:{
        type: Number
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product