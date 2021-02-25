import React from 'react'
import {connect} from 'react-redux'
import { logout } from '../actions/currentUser'

const Logout = ({ logout }) =>{
    
    return(
        <form onSubmit={logout}>
            <input value="log out" type="submit"/>
        </form>

    )
}


export default connect(null, { logout})(Logout)