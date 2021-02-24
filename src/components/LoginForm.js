import React from 'react'
import {connect} from 'react-redux'

const LoginForm = () =>{
    return(
        <form onSubmit={}>
            <input name="email" value={} type="text" onChange={}/>
            <input name="password" value={} type="password" onChange={}/>
            <input value="log in" type="submit"/>


        </form>

    )
}

const mapStateToProps = state => {
    return{
        email: state.LoginForm.email,
        password: state.LoginForm.password
    }
}

export default connect(mapStateToProps)(LoginForm)