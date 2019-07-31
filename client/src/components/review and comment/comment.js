import React from 'react'
import axios from 'axios'
import CommentForm from './commentForm'

class Comment extends React.Component{
    handleSubmit = (data) => {
        axios.post('http://localhost:3005/comments',data)
        .then(response => {
            console.log(response.data)
        })
    }
    render(){
        return(
            <div>
                <CommentForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default Comment