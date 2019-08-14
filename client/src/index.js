import React from 'react'
import ReactDOM from 'react-dom'

/* packages */
import axios from './config/axios'
import { Provider } from 'react-redux'

/* redux */
import {setUser} from './redux/actions/user'
import configureStore from './redux/store/storeConfige'

/* components */
import App from './components/App'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

if (localStorage.getItem('userAuthToken')) {
    axios.get(url, {
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
    .then(response => {
        console.log(response)
        store.dispatch(setUser(response.data))
    })
    .catch (err => {
        console.log(err)
    })
}

const provider = (
    <Provider store={store}>
        <App />
        {/* <MyComponent /> */}
    </Provider>
)

ReactDOM.render(provider, document.getElementById('root'))



