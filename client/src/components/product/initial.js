import React from 'react';
import axios from 'axios';
import InitialForm from './initialForm'

class Initail extends React.Component{
	handleSubmit = (formData) => {
    console.log(formData)
    axios.post("http://localhost:3005/products", formData, {
      headers:{
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
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
        <InitialForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
	}
export default Initail