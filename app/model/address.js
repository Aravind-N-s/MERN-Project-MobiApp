const mongoose = require('mongoose')

const Schema = mongoose.Schema
const addressSchema = new Schema({
  addressType:{
    type:String,
    default:'home'
  },
  street:{
    type:String,
    default:'24th cross'
  },
  city:{
    type:String,
    default:'banglore'
  },
  pinCode:{
    type:Number,
    default:'560078'
  },
  landmark:{
    type:String,
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxlength: 10
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address
// address
//   - _id
//   - type
//   - street
//   - city
//   - pin
//   - landmark
//   - user 