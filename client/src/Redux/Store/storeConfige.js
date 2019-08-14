import { createStore, combineReducers } from './node_modules/redux'
import usersReducer from '../Reducers/usersReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: usersReducer
    }))
    return store
}

export default configureStore