import React from 'react';

/* packages */
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import _ from "lodash";

/* components */
import Steps from './stepZilla'
import Comment from "./review and comment/comment";
import ReviewShow from "./review and comment/reviewDisplay";
import Account from "./user/account";
import Login from "./user/login";
import Logout from "./user/logout";
import Register from './user/register';

import Initial from "./product/initial";
import GeneralForm from "./specification/general";
import DesignForm from "./specification/design";
import DisplayForm from "./specification/display";
import PerformanceForm from "./specification/performance";
import StorageForm from "./specification/storage"
import CameraForm from './specification/camera';
import BatteryForm from "./specification/battery";
import NetworkForm from './specification/network';
import MultimediaForm from './specification/multimedia';
import SprecialForm from './specification/special'

import {Typography} from '@material-ui/core'

class App extends React.Component{
  render() {
    return (
      <div>
        <Typography>
          MobiApp          
        </Typography>
        <BrowserRouter>
          <div>
            {_.isEmpty(localStorage.getItem("userAuthToken")) && (
              <div>
                <Link to="/users/register">Register</Link>
                <br />
                <Link to="/users/login">Login</Link>
              </div>
            )}

            {!_.isEmpty(localStorage.getItem("userAuthToken")) && (
              <div>
                <Link to="/users/account">Account</Link>
                <br />
                <Link to="/users/logout">Logout</Link>
              </div>
            )}

            {/* <Link to="/products/initial">
              <h2>Add</h2>
            </Link>
            <Link to="/product/specification/general">
              <h2>General</h2>
            </Link>
            <Link to="/product/specification/design">
              <h2>Design</h2>
            </Link>
            <Link to="/product/specification/display">
              <h2>Display</h2>
            </Link>
            <Link to="/product/specification/performance">
              <h2>Performance</h2>
            </Link>
            <Link to="/product/specification/storage">
              <h2>Storage</h2>
            </Link>
            <Link to="/product/specification/camera">
              <h2>Camera</h2>
            </Link>
            <Link to="/product/specification/battery">
              <h2>Battery</h2>
            </Link>
            <Link to="/product/specification/network">
              <h2>Network</h2>
            </Link>
            <Link to="/product/specification/multimedia">
              <h2>Multimedia</h2>
            </Link>
            <Link to="/product/specification/special">
              <h2>Special</h2>
            </Link> */}
            {/* <Link to="/reviews"><h2>Review Write</h2></Link> */}
            {/* <Link to="/reviews" ><h2>Review show</h2></Link> */}
            {/* <Link to="/comments" ><h2>Comment add</h2></Link> */}
            
            <Switch>
              <Route exact path="/users/register" component={Register} />
              <Route exact path="/users/login" component={Login} />
              <Route exact path="/users/account" component={Account} />
              <Route exact path="/users/logout" component={Logout} />
              <Route exact path="/add" component={Steps} />
              <Route
                path="/products/initial"
                component={Initial}
                exact={true}
              />
              <Route
                path="/product/specification/general"
                component={GeneralForm}
              />
              <Route
                path="/product/specification/design"
                component={DesignForm}
              />
              <Route
                path="/product/specification/display"
                component={DisplayForm}
              />
              <Route
                path="/product/specification/performance"
                component={PerformanceForm}
              />
              <Route
                path="/product/specification/storage"
                component={StorageForm}
              />
              <Route
                path="/product/specification/camera"
                component={CameraForm}
              />
              <Route
                path="/product/specification/battery"
                component={BatteryForm}
              />
              <Route
                path="/product/specification/network"
                component={NetworkForm}
              />
              <Route
                path="/product/specification/multimedia"
                component={MultimediaForm}
              />
              <Route
                path="/product/specification/special"
                component={SprecialForm}
              />
              <Route path="/reviews" component={ReviewShow} />
              <Route path="/comments" component={Comment} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)