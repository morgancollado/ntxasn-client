import './App.css';
import React, {Component} from 'react'
import LoginForm from './components/LoginForm'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'


class App extends Component {
  
  componentDidMount(){
    
    this.props.getCurrentUser()
  }
  
  render(){
    
    return (
      <div>
        hi
        <LoginForm/>
      </div>
    )
  } 
}

export default connect(null, {getCurrentUser})(App);
