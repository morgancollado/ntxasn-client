import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'

const LoginForm = ({login, updateLoginForm}) =>{
    
    

    const handleChange = event => {
        const {name, value } = event.target
        const updatedFromInfo = {
            ...login,
            [name]: value
        }
        updateLoginForm(updatedFromInfo)
    }
    return(
        <form onSubmit={undefined}>
            <input name="email" value={login.email} type="text" onChange={handleChange}/>
            <input name="password" value={login.password} type="password" onChange={handleChange}/>
            <input value="log in" type="submit"/>


        </form>

    )
}

const mapStateToProps = state => {
    
    return{
        login: state.login
    }
 }

export default connect(mapStateToProps, {updateLoginForm})(LoginForm)