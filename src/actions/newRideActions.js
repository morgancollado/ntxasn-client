export const updateNewRideForm = formData =>{
    return {
        type: "UPDATE_NEW_RIDE_FORM",
        formData: formData
    }
}

export const addRide = ride => {
    return {
        type: "ADD_RIDE",
        ride: ride
    }
}

export const cancelRideConfirmed = rideId => {
    return {
        type: "CANCEL_RIDE",
        rideId
    }
}

export const resetNewRideForm = () => {
    return {
        type: "RESET_NEW_RIDE_FORM"
    }
}

export const updateRideConfirm = (ride) => {
    return {
        type: "UPDATE_RIDE",
        ride: ride
    }
}

export const requestNewRide = (rideData, history) => {
    debugger
    return dispatch => {
        const info = {
            ride: rideData
        }
        return fetch('http://localhost:3000/api/v1/rides', {
            credentials: "include",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            } else {
                dispatch(addRide(resp.data))
                dispatch(resetNewRideForm())
                history.push('/')
            }
        })

    }
}

export const updateRide= (rideData, history) => {
    return dispatch => {
        const info = {
            ride: rideData
        }
        return fetch(`http://localhost:3000/api/v1/rides/${rideData.rideId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            } else {
                dispatch(updateRideConfirm(resp.data))
                history.push('/')
            }
        })

    }

}

export const cancelRide = (rideId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/rides/${rideId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            } else {
                dispatch(cancelRideConfirmed(rideId))
                history.push('/')
            }
        })

    }
}
