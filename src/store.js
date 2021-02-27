import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/user'
import currentUserReducer from './reducers/currentUser'
import loginReducer from './reducers/loginReducer'
import ridesReducer from './reducers/ridesReducer'
import signupReducer from './reducers/signupReducer'

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  login: loginReducer,
  rides: ridesReducer,
  signup: signupReducer
})

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnchancer(applyMiddleware(thunk)))

export default store