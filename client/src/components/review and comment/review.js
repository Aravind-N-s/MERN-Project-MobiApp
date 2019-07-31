import React, {Component} from 'react'
import ReviewForm from './reviewForm';
import axios from 'axios';

class Review extends Component {
  handleSubmit = (data) => {
    console.log(data)
    axios.post('http://localhost:3005/reviews',data)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    return(
      <div>
        <ReviewForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default Review