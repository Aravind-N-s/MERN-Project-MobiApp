const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  body:{
    type:String
  },
  review: {
    type:Schema.Types.ObjectId,
    ref:'Review'
  },
  isLike:{
    type:Boolean,
    default:true
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

// Comment
//   - Body : String,
//   -review : objectId(ref to review)
//   - islike : Boolean
//   - user : id(ref to user)
