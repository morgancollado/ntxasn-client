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

export const login = credientials =>{
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(credientials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error){
                alert(user.error)
            }else {
                dispatch(setCurrentUser(user))
            }
        })

    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser( ))
        return fetch('http://localhost:3000/api/v1/logout', {
            credientials: "include",
            method: "DELETE"
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
                dispatch(setCurrentUser(user))
            }
        })

    }

}