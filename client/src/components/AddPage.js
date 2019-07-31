import React from 'react'
import Steps from './stepZilla'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

// import BrandAdd from './productAdmin/brandAdd'

class AddPage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Link to ="/products/mobile"><h2>Add Product</h2></Link>
                    <Link to="products/brand"><h2>Add Brand(added by postman)</h2></Link>
                    <Switch>
                        <Route path="/products/mobile" component={Steps} exact={true}/>
                        {/* <Route path="/products/brand" component={BrandAdd} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AddPage