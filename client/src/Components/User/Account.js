import React from './node_modules/react'
import axios from './node_modules/axios'

import { connect } from './node_modules/react-redux'
import { setUser } from '../../Redux/Actions/user'

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
        this.props.history.push("/add")
        // this.props.history.push("/products/initial");
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