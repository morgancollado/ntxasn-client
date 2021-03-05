export const setMyRides = rides => {
    return {
        type: "SET_MY_RIDES",
        rides: rides
    }
}

export const clearRides = () => {
    return {
        type: "CLEAR_RIDES"
    }
}

export const getRides = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/rides", {
            credentials: "include",
            method: 'GET',
            headers: {
                "content-type": 'application/json'
            },
        })
        .then(r => r.json())
        .then(res => {
            if (res.error){
                alert(res.error)
            }else {
                dispatch(setMyRides(res.data))
            }
        })

    }
}

export const setEditForm = ride => {
    return {
        type: 'SET_EDIT_FORM',
        ride: ride
    }
}