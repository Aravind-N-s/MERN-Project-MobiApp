const mongoose = require('mongoose')
const  Schema = mongoose.Schema

const reviewSchema = new Schema({
  title:{
    type:String
  }, 
  body: {
    type:String,
  },
  issues:[{
    type: String
  }],
  rating: {
    type:Number,
    default:4.5,
  },
  createdAt : {
    type:Date,
    default:Date.now()
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  product:{
    type:Schema.Types.ObjectId,
    ref:'Product'
  }
})
const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
/*   - title : String,
  -body : String,
  -issue : [String,..]
  - createdAt : Date,
  -product : objectId(ref to product)
  - comments : [“objectId”, “objectId”, “objectId”, ...](ref to comments)
  - user : id(ref to user)
*/