import './App.css';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import NavBar from './components/Navbar'

class App extends Component {
  
  componentDidMount(){
    
    this.props.getCurrentUser()
  }
  
  render(){
    
    return (
      <div>
       <NavBar/>
      </div>
    )
  } 
}



export default connect(null, {getCurrentUser})(App);
