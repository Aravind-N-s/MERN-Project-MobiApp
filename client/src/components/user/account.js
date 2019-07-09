import React from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { setUser } from '../../actions/user'

class Account extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3005/users/account', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
      .then(response => {
        console.log(response.data)
        const user = response.data
        this.props.dispatch(setUser(user))
        this.props.history.push('/products')
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Account)