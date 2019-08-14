import React from './node_modules/react'

class FormLogin extends React.Component {
  constructor() {
    super()
    this.state = {
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
      email: this.state.email,
      password: this.state.password
    }
    this.props.handleLogin(formData)
  }
  render() {
    return (
      <div>
        <h2>Login of user</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
          <br />
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default FormLogin