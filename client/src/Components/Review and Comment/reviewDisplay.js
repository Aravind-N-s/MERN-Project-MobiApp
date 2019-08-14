import React from './node_modules/react'
import axios from './node_modules/axios';
import Comment from './commentShow'

class ReviewShow extends React.Component{
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3005/reviews')
        .then(response => {
            this.setState({reviews :response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        console.log(this.state.reviews)
        return(
            <div>
                <h2>
                    <ul>
                        {this.state.reviews.map(review => 
                        <li key={review._id}>
                            {/* <h1>{review.user.userName}</h1> */}
                            <b>Body:</b><p>{review.body}</p>
                            <b>Issues:</b><p>{review.issues.map(is => <small>{is}</small>)}</p>
                            <b>rating:</b><p>{review.rating}</p>
                            <Comment id={review._id}/>
                        </li>)}
                        
                    </ul>
                </h2>
            </div>
        )
    }
}
export default ReviewShow