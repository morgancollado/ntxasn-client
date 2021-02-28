import './App.css';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import NavBar from './components/Navbar'
import RidesContainer from './containers/RidesContainer'
import { Route, withRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Home from './components/Home'


class App extends Component {
  
  componentDidMount(){
    
    this.props.getCurrentUser()
  }
  
  render(){
    const {loggedIn} = this.props
    return (
      
      <div>
      <NavBar/>
      
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/' render={()=> loggedIn ? <RidesContainer/> : <Home/>} />

        <Route exact path='/signup' component={SignUpForm}/>
        <Route exact path='my-rides' component={RidesContainer}/>
       
      
      </div>
      
    )
  } 
}

const mapStateToProps = state =>{ 
  return ({
    loggedIn: state.currentUser
  })
}



export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
