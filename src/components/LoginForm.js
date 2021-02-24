import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import { login } from '../actions/currentUser'

const LoginForm = ({loginformData, updateLoginForm, login }) =>{
    
    

    const handleChange = event => {
        const {name, value } = event.target
        const updatedFromInfo = {
            ...loginformData,
            [name]: value
        }
        updateLoginForm(updatedFromInfo)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        login(loginformData)

    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="email" value={loginformData.email} type="text" onChange={handleChange}/>
            <input name="password" value={loginformData.password} type="password" onChange={handleChange}/>
            <input value="log in" type="submit"/>


        </form>

    )
}

const mapStateToProps = state => {
    
    return{
        loginformData: state.login
    }
 }

export default connect(mapStateToProps, {updateLoginForm, login})(LoginForm)