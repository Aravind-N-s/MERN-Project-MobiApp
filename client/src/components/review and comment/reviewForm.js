import React, {Component} from 'react'

class ReviewForm extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      body:'',
      issues:'',
      rating:'',
    }
  }
  handleChange = (e) => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value
    const name = e.target.name
    this.setState(() => ({[name]: value}))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      title:this.state.title,
      body:this.state.body,
      issues:this.state.issues,
      rating:this.state.rating
    }
    this.props.handleSubmit(formData)
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
          </div>
          <div>
            <label>Body:</label>
          <input type="text" name="body" value={this.state.body} onChange={this.handleChange} /><br />
          </div>
          <div>
            <label>Issues:</label>
          <input type="text" name="issues" value={this.state.issues} onChange={this.handleChange} /><br />
          </div>
          <div>
            <label>Rating</label>
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleChange} /><br />
          </div>
          <div>
            <input type="submit" /><br />
          </div>
        </form>
      </div >
    )
  }         
}
export default ReviewForm