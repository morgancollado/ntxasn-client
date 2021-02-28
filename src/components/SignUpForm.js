import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const SignUpForm = ({signupFormData, updateSignupForm, signup, history }) =>{
    
    

    const handleChange = event => {
        const {name, value } = event.target
        const updatedFromInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFromInfo)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        signup(signupFormData, history)

    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={signupFormData.name} type="text" onChange={handleChange} placeholder="name"/>
            <input name="email" value={signupFormData.email} type="text" onChange={handleChange} placeholder='email' />
            <input name="password" value={signupFormData.password} type="password" onChange={handleChange} placeholder='password' />
            <input name="phone_number" type="tel" value={signupFormData.phone_number} onChange={handleChange} placeholder='phone number'/>
            <input value="sign up" type="submit"/>
        </form>

    )
}

const mapStateToProps = state => {
    
    return{
        signupFormData: state.signup
    }
 }

export default connect(mapStateToProps, {updateSignupForm, signup})(SignUpForm)