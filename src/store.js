import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/user'
import currentUserReducer from './reducers/currentUser'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  login: loginReducer 
})

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnchancer(applyMiddleware(thunk)))

export default store