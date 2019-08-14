import React from './node_modules/react'

/* packages */
import axios from '../../Config/Axios'

import FormLogin from './loginForm'

class UserLogin extends React.Component {
  handleLogin = (data) => {
    axios.post('/users/login', data)
      .then(response => {
        console.log(response.data)
        if (response.data.error) {
          alert(response.data.error)
        } else {
          const token = response.data.token
          localStorage.setItem('userAuthToken', token)
          this.props.history.push('/users/account')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <FormLogin handleLogin={this.handleLogin} />
      </div>
    )
  }
}
export default UserLogin