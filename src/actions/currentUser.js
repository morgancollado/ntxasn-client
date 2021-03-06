import {resetLoginForm} from './loginForm'
import { resetSignupForm } from './signupForm'
import {clearRides} from './rideActions'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (credentials, history) =>{
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                dispatch(setCurrentUser(user.data))
                dispatch(resetLoginForm())
                history.push('/')
            }
        })

    }
}

export const logout = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/v1/logout', {
            credientials: "include",
            method: "DELETE"
        })
        .then(r => r.json())
        .then(user => {
            dispatch(clearCurrentUser(user ))
            dispatch(clearRides())
        })
    }
}

export const getCurrentUser = () =>{
    
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: 'GET',
            headers: {
                "content-type": 'application/json'
            },
        })
        .then(r => r.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                dispatch(setCurrentUser(user.data))
            }
        })

    }

}

export const signup = (credentials, history) => {
    return dispatch => {
        const info = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else
            dispatch(setCurrentUser(user.data))
            dispatch(resetSignupForm())
            history.push('/')
        })
    }
}