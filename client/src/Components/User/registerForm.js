import React from './node_modules/react'

class FormRegister extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value
    const name = e.target.name
    this.setState(() => ({
      [name]: value
    }))
  }
  handleSubmit = (e) => {

    e.preventDefault()
    const formData = {
      userName: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.handleRegister(formData)
  }
  render() {
    return (
      <div>
        <h2>User Registration</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label><br />
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /><br />

          <label>Email</label><br />
          <input type='email' name='email' value={this.state.email} onChange={this.handleChange} /><br />
 
          <label>Password</label><br />
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} /><br />

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default FormRegister