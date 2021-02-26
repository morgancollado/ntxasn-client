import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout'
import LoginForm from './LoginForm'

const NavBar = (props) =>{
    
    return(
        <div>
            {props.currentUser ? <Logout/>:<LoginForm/>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      currentUser: state.currentUser 
    }
  }

export default connect(mapStateToProps)(NavBar) 