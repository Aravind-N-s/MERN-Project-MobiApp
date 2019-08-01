import React from 'react';

/* packages */
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import _ from "lodash";

/* components */
import Steps from './stepZilla'
import Comment from "./review and comment/comment"
import ReviewShow from "./review and comment/reviewDisplay"
import Account from "./user/account"
import Login from "./user/login"
import Logout from "./user/logout"
import Register from './user/register'

//material-ui
import {Typography,AppBar,Toolbar, IconButton,InputBase,Badge,MenuItem,Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

 
class App extends React.Component{
  constructor(){
    super()
    this.buttonAuth = this.buttonAuth.bind(this)
  }

  buttonAuth = (props) =>{
    return(
      <div>
          {_.isEmpty(localStorage.getItem("userAuthToken")) && (
            <div>
              <Link to="/users/register">Register</Link>
              <Link to="/users/login">Login</Link>
            </div>
          )}

          {!_.isEmpty(localStorage.getItem("userAuthToken")) && (
            <div>
              <Link to="/users/account">Account</Link>
            </div>
          )}
      </div>
    )
  }

  render() {
    return (
      <AppBar position="static">
          MobiApp   
        <BrowserRouter>
            <Switch>
              {_.isEmpty(localStorage.getItem("userAuthToken")) && (
                <div>
                  <Route exact path="/users/account" component={Account} />
                  <Route exact path="/users/register" component={Register} />
                  <Route exact path="/add" component={Steps} />

                  <Route path="/reviews" component={ReviewShow} />
                  <Route path="/comments" component={Comment} />  
                </div>
              )}
              {_.isEmpty(localStorage.getItem("userAuthToken")) && (
                <div>
                  <Route exact path="/users/login" component={Login} />
                  <Route exact path="/users/logout" component={Logout} /> 
                </div>
              )}
            </Switch>
        </BrowserRouter>
      </AppBar>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)