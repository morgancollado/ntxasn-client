import './App.css';
import React, {Component} from 'react'
import LoginForm from './components/LoginForm'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import Logout from './components/Logout'


class App extends Component {
  
  componentDidMount(){
    
    this.props.getCurrentUser()
  }
  
  render(){
    
    return (
      <div>
        hi
        {this.props.currentUser ? <Logout/>:<LoginForm/>}
      </div>
    )
  } 
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser 
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
