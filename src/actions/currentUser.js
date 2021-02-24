export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user
    }
}

export const login = credientials =>{
    console.log(credientials)
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