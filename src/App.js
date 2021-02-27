import './App.css';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import NavBar from './components/Navbar'
import RidesContainer from './containers/RidesContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import SignUpForm from './components/SignUpForm'

class App extends Component {
  
  componentDidMount(){
    
    this.props.getCurrentUser()
  }
  
  render(){
    
    return (
      <Router>
      <div>
      <NavBar/>
      
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/signup' component={SignUpForm}/>
        <Route exact path='my-rides' component={RidesContainer}/>
       
      
      </div>
      </Router>
    )
  } 
}



export default connect(null, {getCurrentUser})(App);
