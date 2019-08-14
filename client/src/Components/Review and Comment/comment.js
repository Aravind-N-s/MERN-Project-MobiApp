import React from './node_modules/react'
import axios from './node_modules/axios'
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