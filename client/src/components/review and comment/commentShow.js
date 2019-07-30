import React from 'react'
import axios from 'axios'

class CommentShow extends React.Component{
  constructor(){
    super()
    this.state = {
      comments : []
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/comments?reviewId=${this.props.id}`)
    .then(response => {
      console.log(response.data)
      this.setState({comments:response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    return(
      <div>
        <ul>
          <h2>{this.state.comments.map(comment => <li><h1>{comment.user.userName}</h1><br /> <h2>{comment.body}</h2></li>)}</h2>
        </ul>
        
      </div>
    )
  }
}
export default CommentShow