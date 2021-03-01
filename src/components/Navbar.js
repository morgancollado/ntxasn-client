import React from 'react'
import {connect} from 'react-redux'
import Logout from './Logout'
import LoginForm from './LoginForm'
import {NavLink} from 'react-router-dom'

const NavBar = (props) =>{
    
    return(
        <div className="NavBar">
            <NavLink exact activeClassName="active" to='/rides'>My Rides</NavLink>
            <NavLink exact activeClassName="active" to='/rides/new'>Request Ride</NavLink>

            {props.currentUser ? <Logout/>: null}
        </div>
    )
}
const mapStateToProps = state => {
    return {
      currentUser: state.currentUser 
    }
  }

export default connect(mapStateToProps)(NavBar) 