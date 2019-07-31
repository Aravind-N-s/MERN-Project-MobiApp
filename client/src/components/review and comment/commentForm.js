import React from 'react'
import axios from 'axios';

class Comment extends React.Component{
    constructor(){
        super()
        this.state = {
            body:'',
            isLike: false
        }
    }
    handleChange = (e) => {
        if(e.target.type === 'checkbox'){
            console.log('checkbox')
            this.setState(prevState => ({isLike:!prevState.isLike}))
        }else{
            const value = e.target.type === 'text' ? e.target.value : e.target.value
            const name = e.target.name
            this.setState({ [name]: value })
        }
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body:this.state.body,
            isLike: this.state.isLike
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>Body:</lable>
                    <input type="text" name='body' onChange={this.handleChange}/>
                    <br />
                    <label htmlfor='radio1'>isLike:</label>
                    <input id='radio1' name='isLike' type='checkbox' value={this.state.isLike} onChange={this.handleChange}/>
                    <br /><input type='submit' value='comment' />
                </form>
            </div>
        )
    }
}
export default Comment